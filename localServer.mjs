import http from 'http';
import { xml } from './main.mjs';

const port = 8080;
http.createServer((_req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/rss+xml' });
  res.end(xml);
}).listen(port);

console.log('Server started on https://localhost:' + port);
