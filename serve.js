// Local dev server — run with:  node serve.js
// Then open:  http://localhost:8080
//
// This is only needed for local development.
// Vercel (and any real web host) serves files automatically.

const http  = require('http');
const https = require('https');
const fs    = require('fs');
const path  = require('path');

const PORT = 8080;

// Load ANTHROPIC_API_KEY from .env.local if present
try {
  fs.readFileSync(path.join(__dirname, '.env.local'), 'utf8')
    .split('\n')
    .forEach(line => {
      const eq = line.indexOf('=');
      if (eq > 0) {
        const key = line.slice(0, eq).trim();
        const val = line.slice(eq + 1).trim().replace(/^['"]|['"]$/g, '');
        if (key && !process.env[key]) process.env[key] = val;
      }
    });
} catch (_) {}

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'text/javascript',
  '.css':  'text/css',
  '.png':  'image/png',
  '.PNG':  'image/png',
  '.webp': 'image/webp',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
};

// Reuse the same handler logic as api/chat.js
const chatHandler = require('./api/chat');

http.createServer((req, res) => {
  const urlPath = req.url.split('?')[0];

  // Route POST /api/chat to the serverless handler
  if (req.method === 'POST' && urlPath === '/api/chat') {
    let raw = '';
    req.on('data', chunk => raw += chunk);
    req.on('end', () => {
      try { req.body = JSON.parse(raw); } catch (_) { req.body = {}; }
      // Wrap res to match Vercel's interface
      res.status = (code) => { res.statusCode = code; return res; };
      res.json   = (obj)  => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(obj));
      };
      chatHandler(req, res).catch(e => {
        res.statusCode = 500;
        res.end(JSON.stringify({ error: e.message }));
      });
    });
    return;
  }

  // Serve static files
  const filePath = path.join(__dirname, urlPath === '/' ? 'index.html' : urlPath);
  const ext = path.extname(filePath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end(`Not found: ${urlPath}`);
      return;
    }
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(PORT, () => {
  console.log(`Map Tour running at http://localhost:${PORT}`);
  if (!process.env.ANTHROPIC_API_KEY) {
    console.warn('  Warning: ANTHROPIC_API_KEY not set. Add it to .env.local to use the chatbot.');
  }
});
