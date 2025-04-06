const fs = require('fs');
const path = require('path');

// Read the original large API file
console.log('Reading the original API file...');
const apiFile = fs.readFileSync('mixcore-api-enpoints.json', 'utf8');
const apiData = JSON.parse(apiFile);

// Create the index file with metadata and without paths
const indexData = {
    openapi: apiData.openapi,
    info: apiData.info,
    paths: {}
};

// Write the index file
fs.writeFileSync(
    path.join('api-docs', 'index.json'),
    JSON.stringify(indexData, null, 2)
);
console.log('Created index.json file');

// Extract all schemas to a separate file
const schemasData = {
    openapi: apiData.openapi,
    info: apiData.info,
    components: apiData.components
};

fs.writeFileSync(
    path.join('api-docs', 'schemas', 'all-schemas.json'),
    JSON.stringify(schemasData, null, 2)
);
console.log('Created schemas file');

// Create category groupings
const categories = {
    auth: {
        paths: {},
        description: 'Authentication and Authorization API endpoints'
    },
    automation: {
        paths: {},
        description: 'Workflow and Automation API endpoints'
    },
    mixservices: {
        paths: {},
        description: 'MixCore Services API endpoints'
    }
};

// Function to determine the category of an endpoint
function getCategoryFromPath(path, methods) {
    // Check the path first for quick categorization
    if (path.includes('/auth/') || path.includes('/identity/')) {
        return 'auth';
    } else if (path.includes('/automation/') || path.includes('/workflow/')) {
        return 'automation';
    }

    // Need to check each method's tags
    for (const methodName in methods) {
        const method = methods[methodName];
        if (method.tags && method.tags.length > 0) {
            // Check for auth-related tags
            if (method.tags.some(tag => tag.toLowerCase().includes('auth') ||
                tag.toLowerCase().includes('role') ||
                tag.toLowerCase().includes('identity'))) {
                return 'auth';
            }

            // Check for automation-related tags
            if (method.tags.some(tag => tag.toLowerCase().includes('automation') ||
                tag.toLowerCase().includes('workflow') ||
                tag.toLowerCase().includes('trigger'))) {
                return 'automation';
            }
        }

        // Also check descriptions if available
        if (method.description) {
            if (method.description.toLowerCase().includes('auth') ||
                method.description.toLowerCase().includes('login') ||
                method.description.toLowerCase().includes('permission')) {
                return 'auth';
            }

            if (method.description.toLowerCase().includes('automation') ||
                method.description.toLowerCase().includes('workflow')) {
                return 'automation';
            }
        }
    }

    // Default to mixservices if no specific category is found
    return 'mixservices';
}

// Sort paths into categories
console.log('Sorting API endpoints into categories...');
Object.entries(apiData.paths).forEach(([pathKey, pathValue]) => {
    const category = getCategoryFromPath(pathKey, pathValue);
    categories[category].paths[pathKey] = pathValue;
});

// Count the endpoints in each category
for (const [category, data] of Object.entries(categories)) {
    const count = Object.keys(data.paths).length;
    console.log(`${category}: ${count} endpoints`);
}

// Write each category to its own file
for (const [category, data] of Object.entries(categories)) {
    const categoryData = {
        openapi: apiData.openapi,
        info: {
            ...apiData.info,
            title: `${apiData.info.title} - ${data.description}`,
        },
        paths: data.paths
    };

    // Create the main category file
    fs.writeFileSync(
        path.join('api-docs', category, 'index.json'),
        JSON.stringify(categoryData, null, 2)
    );
    console.log(`Created ${category}/index.json file`);

    // If the category has many endpoints, further split it into smaller files
    const pathEntries = Object.entries(data.paths);
    if (pathEntries.length > 10) { // Lower threshold to ensure we create split files
        console.log(`Splitting ${category} into smaller files...`);

        // Group by every 30 endpoints
        const chunks = [];
        for (let i = 0; i < pathEntries.length; i += 30) {
            chunks.push(pathEntries.slice(i, i + 30));
        }

        // Write each chunk to a separate file
        chunks.forEach((chunk, index) => {
            const chunkPaths = {};
            chunk.forEach(([path, value]) => {
                chunkPaths[path] = value;
            });

            const chunkData = {
                openapi: apiData.openapi,
                info: {
                    ...apiData.info,
                    title: `${apiData.info.title} - ${data.description} (Part ${index + 1})`,
                },
                paths: chunkPaths
            };

            fs.writeFileSync(
                path.join('api-docs', category, `part-${index + 1}.json`),
                JSON.stringify(chunkData, null, 2)
            );
            console.log(`Created ${category}/part-${index + 1}.json file`);
        });
    }
}

console.log('API documentation splitting completed successfully!'); 