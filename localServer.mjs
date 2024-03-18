import http from 'http';
import main from './main.mjs';

const invI = 'https://invidious.nerdvpn.de';
const pID = 'PLycDFnZLmfaDgAij1RGliVANxaqg0Ar_W';
const pipI = 'https://pipedapi.kavin.rocks';
const port = 8080;

http.createServer(async (_req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/rss+xml' });
  res.end(await main(pipI, invI, pID));
}).listen(port);

console.log('Server started on https://localhost:' + port);
