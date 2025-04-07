const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = 3000;

// Initialize Next.js
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Parse the URL
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      // Log the request for debugging
      console.log(`[${new Date().toISOString()}] ${req.method} ${pathname}`);

      // Special handling for dashboard/pages route
      if (pathname === '/dashboard/pages') {
        console.log('Handling dashboard/pages route');
        await app.render(req, res, '/dashboard/pages', query);
      } else {
        // Let Next.js handle all other routes
        await handle(req, res, parsedUrl);
      }
    } catch (err) {
      console.error('Error occurred handling request:', err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
}); 