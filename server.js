const { createServer: createHttpServer } = require('http');
const { createServer: createHttpsServer } = require('https');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = 3000;
const useHttps = true; // Set to true to use HTTPS

// Initialize Next.js
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

// HTTPS certificates
const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, 'certificates', 'localhost-key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'certificates', 'localhost.pem')),
};

app.prepare().then(() => {
  let server;
  
  if (useHttps) {
    server = createHttpsServer(httpsOptions, async (req, res) => {
      handleRequest(req, res);
    });
  } else {
    server = createHttpServer(async (req, res) => {
      handleRequest(req, res);
    });
  }
  
  async function handleRequest(req, res) {
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
  }
  
  server.listen(port, (err) => {
    if (err) throw err;
    const protocol = useHttps ? 'https' : 'http';
    console.log(`> Ready on ${protocol}://${hostname}:${port}`);
  });
}); 