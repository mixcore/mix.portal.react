// mock-api.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('mock-db.json');
const middlewares = jsonServer.defaults({ cors: true });

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add CORS headers
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  next();
});

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query);
});

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

// Add custom request handling logic
server.use((req, res, next) => {
  // Simulate a 2 second delay in responses (optional - for testing loading states)
  // setTimeout(next, 2000);

  // Continue to JSON Server router
  next();
});

// Custom pagination, search and filtering middleware for posts
router.render = (req, res) => {
  let data = res.locals.data;
  const route = req.path.replace(/^\//, '');

  // Custom handling for posts
  if (route === 'posts' && req.method === 'GET') {
    const query = req.query;
    const pageIndex = parseInt(query.pageIndex) || 0;
    const pageSize = parseInt(query.pageSize) || 10;
    const search = query.search || '';
    const status =
      query.status !== undefined ? parseInt(query.status) : undefined;

    // Filter by search term
    if (search) {
      data = data.filter(
        (item) =>
          item.title?.toLowerCase().includes(search.toLowerCase()) ||
          item.excerpt?.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by status
    if (status !== undefined) {
      data = data.filter((item) => item.status === status);
    }

    // Get total before pagination
    const totalItems = data.length;

    // Apply pagination
    const startIndex = pageIndex * pageSize;
    const paginatedItems = data.slice(startIndex, startIndex + pageSize);

    // Make sure the id field is a number, not a string (json-server issue)
    const formattedItems = paginatedItems.map((item) => ({
      ...item,
      id: Number(item.id)
    }));

    // Return formatted response with pagination info
    return res.jsonp({
      items: formattedItems,
      totalItems,
      totalPages: Math.ceil(totalItems / pageSize),
      pageIndex,
      pageSize
    });
  }

  // For single post, ensure ID is a number
  if (route.startsWith('posts/') && req.method === 'GET') {
    if (data && typeof data === 'object') {
      return res.jsonp({
        ...data,
        id: Number(data.id)
      });
    }
  }

  // Default response for other routes
  res.jsonp(data);
};

// Use custom rewriter for API paths
server.use(
  jsonServer.rewriter({
    '/api/v2/rest/mix-portal/mix-post': '/posts',
    '/api/v2/rest/mix-portal/mix-post/:id': '/posts/:id',
    '/api/v2/rest/mix-portal/mix-post/remove-cache/:id': '/posts/:id'
  })
);

// Use the router
server.use(router);

// Start server
const port = 3001;
server.listen(port, () => {
  console.log(`Mock API Server is running on http://localhost:${port}`);
});
