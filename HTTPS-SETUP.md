# HTTPS Setup for Local Development

This document explains how to set up HTTPS for your local development environment.

## Why Use HTTPS Locally?

- Some features require HTTPS (e.g., Service Workers, certain Web APIs)
- It provides a more production-like environment
- It helps identify mixed content issues early
- It helps with testing authentication flows
- The `/api/v2/rest/auth/user/login-unsecure` endpoint works better with HTTPS

## Option 1: Using mkcert (Recommended)

[mkcert](https://github.com/FiloSottile/mkcert) creates locally-trusted development certificates.

1. Install mkcert:
   - macOS: `brew install mkcert`
   - Windows: `choco install mkcert`
   - Linux: [See mkcert documentation](https://github.com/FiloSottile/mkcert#linux)

2. Generate and install certificates:
   ```bash
   npm run generate-certs
   ```

3. Start the HTTPS development server:
   ```bash
   npm run dev:https
   ```

Alternatively, you can do both in one command:
```bash
npm run dev:setup
```

## Option 2: Using Node.js Crypto (No External Tools)

If you can't install mkcert, you can use the built-in certificate generator:

1. Generate certificates using Node.js:
   ```bash
   npm run generate-certs:node
   ```

2. Start the HTTPS development server:
   ```bash
   npm run dev:https
   ```

Alternatively, you can do both in one command:
```bash
npm run dev:setup:node
```

**Note**: Since these certificates are self-signed, your browser will show a security warning. You'll need to click through this warning to access your local site.

## Accessing the Site

Once the server is running, open your browser and navigate to:

```
https://localhost:3000
```

## Troubleshooting

### Certificate Issues

If you encounter certificate issues:

1. Make sure the certificates are in the `certificates` directory in the project root
2. Check that the files are named `localhost-key.pem` and `localhost.pem`
3. Try regenerating the certificates

### HTTPS Connection Issues

If you can't connect to the HTTPS server:

1. Make sure port 3000 is not being used by another process
2. Check if your firewall is blocking the connection
3. Try restarting the server 