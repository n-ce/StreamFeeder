import { getData } from "./invidious.mjs";

const exInstance = 'https://invidious.nerdvpn.de';
const exPID = 'PLycDFnZLmfaDgAij1RGliVANxaqg0Ar_W';


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
<${name + xmlAttribute(attributes)}>${innerXML}
</${name}>`;


const data = (await
  getData(exInstance, exPID)
)
  .map(id => xmlTag('link', '', {
    'rel': 'enclosure', 'url':
      exInstance + `/latest_version?id=${id}&amp;itag=251`
  }))
  .join('\n');

export const xml = () =>
  '<?xml version="1.0" encoding="UTF-8" ?>' +
  xmlTag('rss',
    xmlTag('channel',
      xmlTag('title', 'Test RSS Audio') +
      xmlTag('link', exInstance) +
      xmlTag('description', 'this is a test for rss audio gen') +
      xmlTag('item', data)
    ), { 'version': '2.0' }
  );

