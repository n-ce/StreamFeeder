const exInstance = 'https://invidious.nerdvpn.de';
const exID = 'YRoZ-MXZtMA';
const exItag = '251';

const createLink = (id, itag, api) => api + `/latest_version?id=${id}
&amp;itag=${itag}`;

const xmlMeta = innerXML => `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">${innerXML}</rss>`;

function xmlAttribute(attrs) {
  let string = '';
  for (const attr in attrs)
    string += ` ${attr}="${attrs[attr]}"`;
  return string;
}

const xmlTag = (
  name,
  innerXML = '',
  attributes = {}
) => `
<${name + xmlAttribute(attributes)}>${innerXML}</${name}>`;


const testLink = createLink(exID, exItag, exInstance);

export const xml = (url = testLink) =>
  xmlMeta(xmlTag('channel',
    xmlTag('title', 'Test RSS Audio') +
    xmlTag('link', 'testlink.com') +
    xmlTag('description', 'this is a test for rss audio gen') +
    xmlTag('item',
      xmlTag('title', 'an audio file') +
      xmlTag('link', '', { 'rel': 'enclosure', 'url': url }) +
      xmlTag('description', 'an audio file description')
    )
  ));

