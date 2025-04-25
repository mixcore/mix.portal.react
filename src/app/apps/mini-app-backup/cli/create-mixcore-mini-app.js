#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ANSI color codes for pretty output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  yellow: '\x1b[33m',
  red: '\x1b[31m'
};

// Command line arguments
const args = process.argv.slice(2);
const appName = args[0];

if (!appName) {
  console.log(`${colors.red}${colors.bright}Error: App name is required${colors.reset}`);
  console.log(`${colors.yellow}Usage: npx create-mixcore-mini-app <app-name>${colors.reset}`);
  process.exit(1);
}

// Template source - this will be replaced with the package path when published
const templateDir = path.resolve(__dirname, '..');
const targetDir = path.resolve(process.cwd(), appName);

// Show welcome message
console.log(`
${colors.cyan}${colors.bright}╔══════════════════════════════════════════════════╗
║                                                  ║
║  Welcome to the Mixcore Mini-App Creator!        ║
║                                                  ║
╚══════════════════════════════════════════════════╝${colors.reset}

Creating a new mini-app: ${colors.green}${appName}${colors.reset}
`);

// Check if directory already exists
if (fs.existsSync(targetDir)) {
  console.log(`${colors.yellow}⚠️  Directory ${appName} already exists.${colors.reset}`);
  
  rl.question(`Do you want to overwrite it? (y/N): `, (answer) => {
    if (answer.toLowerCase() === 'y') {
      console.log(`${colors.yellow}Removing existing directory...${colors.reset}`);
      fs.rmSync(targetDir, { recursive: true, force: true });
      createApp();
    } else {
      console.log(`${colors.red}${colors.bright}Aborted.${colors.reset}`);
      rl.close();
      process.exit(1);
    }
  });
} else {
  createApp();
}

function createApp() {
  // Create app directory
  console.log(`${colors.blue}Creating app directory...${colors.reset}`);
  fs.mkdirSync(targetDir, { recursive: true });
  
  // Copy template files
  console.log(`${colors.blue}Copying template files...${colors.reset}`);
  copyDirectory(templateDir, targetDir, ['cli', 'node_modules', '.git', 'package-lock.json', 'NPM-README.md']);
  
  // Update app configuration
  console.log(`${colors.blue}Updating app configuration...${colors.reset}`);
  updateAppConfig();
  
  // Install dependencies
  console.log(`${colors.blue}Installing dependencies...${colors.reset}`);
  try {
    execSync('npm install', { cwd: targetDir, stdio: 'inherit' });
  } catch (error) {
    console.log(`${colors.yellow}⚠️  Dependencies installation failed. You'll need to run npm install manually.${colors.reset}`);
  }
  
  // Show success message
  console.log(`
${colors.green}${colors.bright}╔══════════════════════════════════════════════════╗
║                                                  ║
║  Mini-app created successfully!                  ║
║                                                  ║
╚══════════════════════════════════════════════════╝${colors.reset}

${colors.cyan}${colors.bright}Your app is ready at: ${colors.reset}${colors.green}${targetDir}${colors.reset}

${colors.cyan}${colors.bright}Next steps:${colors.reset}

1. ${colors.yellow}cd ${appName}${colors.reset}
2. Review and update ${colors.yellow}config/app.config.json${colors.reset} with your app details
3. Start implementing your features!

${colors.cyan}${colors.bright}Documentation:${colors.reset}
- See README.md for more details on using the template
- Visit ${colors.blue}https://mixcore.org${colors.reset} for more information

${colors.cyan}${colors.bright}Happy coding!${colors.reset}
  `);
  
  rl.close();
  process.exit(0);
}

function copyDirectory(source, target, excludes = []) {
  // Get all files and directories from source
  const entries = fs.readdirSync(source, { withFileTypes: true });
  
  for (const entry of entries) {
    const sourcePath = path.join(source, entry.name);
    const targetPath = path.join(target, entry.name);
    
    // Skip excluded files/directories
    if (excludes.includes(entry.name)) {
      continue;
    }
    
    if (entry.isDirectory()) {
      // Create directory if it doesn't exist
      if (!fs.existsSync(targetPath)) {
        fs.mkdirSync(targetPath, { recursive: true });
      }
      
      // Copy contents recursively
      copyDirectory(sourcePath, targetPath, excludes);
    } else {
      // Copy file
      fs.copyFileSync(sourcePath, targetPath);
    }
  }
}

function updateAppConfig() {
  // Update app.config.json
  const configPath = path.join(targetDir, 'config', 'app.config.json');
  
  if (fs.existsSync(configPath)) {
    let config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    
    // Update app ID and name
    config.appId = appName.toLowerCase().replace(/\s+/g, '-');
    config.displayName = appName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    // Update navigation item
    if (config.navigation && config.navigation.menuItem) {
      config.navigation.menuItem.title = config.displayName;
      config.navigation.menuItem.url = `/dashboard/apps/${config.appId}`;
      config.navigation.menuItem.contextId = config.appId;
    }
    
    // Write updated config
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2), 'utf8');
  }
  
  // Create index.d.ts for TypeScript
  const indexDtsPath = path.join(targetDir, 'index.d.ts');
  if (!fs.existsSync(indexDtsPath)) {
    fs.writeFileSync(indexDtsPath, `import React from 'react';

declare function MiniApp(props: {
  standalone?: boolean;
}): React.ReactElement;

export default MiniApp;
`, 'utf8');
  }
} 