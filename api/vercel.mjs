import { xml } from "../main.mjs"

export default function handler(req, res) {

  const url = req.query.url;
  const xmlResponse = xml(url);

  return res.send(xmlResponse);
}
