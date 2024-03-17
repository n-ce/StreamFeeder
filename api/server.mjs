import http from 'http';

const testUrl = 'https://invidious.nerdvpn.de/latest_version?id=YRoZ-MXZtMA&amp;itag=251';

const xmlMeta = innerXML => '<?xml version="1.0" encoding="UTF-8" ?><rss version="2.0">' + innerXML + '</rss>';

function xmlProps(props) {
  let string = '';
  if (props)
    for (const prop in props)
      string += ` ${prop}="${props[prop]}"`;
  return string;
}

const xmlNode = (
  node,
  innerXML = '',
  props = ''
) => `<${node + xmlProps(props)}>${innerXML}</${node}>`;



const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/rss+xml' });

  const xml = xmlMeta(xmlNode('channel',
    xmlNode('title', 'Test RSS Audio') +
    xmlNode('link', 'testlink.com') +
    xmlNode('description', 'this is a test for rss audio gen') +
    xmlNode('item',
      xmlNode('title', 'an audio file') +
      xmlNode('link', '', { 'rel': 'enclosure', 'url': testUrl }) +
      xmlNode('description', 'an audio file description')
    )
  )
  );

  res.end(xml);
})

server.listen(8080);

console.log('Server started on port 8080');

