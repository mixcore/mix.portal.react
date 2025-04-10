/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  distDir: '.next',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'api.slingacademy.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: ''
      }
    ]
  },
  async headers() {
    return [
      {
        // Allow CORS for all API routes
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,DELETE,PATCH,POST,PUT'
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
          }
        ]
      }
    ];
  },
  experimental: {
    // This setting is no longer needed in Next.js 15+ as App Router is now the default
  },
  transpilePackages: ['geist'],
  // Add these settings to help with build issues
  webpack: (config, { isServer, dev }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false
      };
    }
    
    // Disable source maps in production to reduce memory usage
    if (!dev) {
      config.devtool = false;
    }
    
    return config;
  },
  // Enable React strict mode for development
  reactStrictMode: true,
  
  // Add trailing slashes to URLs
  trailingSlash: false,
  
  // Custom rewrites to handle route groups
 
};

module.exports = nextConfig;
