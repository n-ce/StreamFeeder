import main from "../main.mjs";

const invI = 'https://invidious.nerdvpn.de';
const pID = 'PLycDFnZLmfaDgAij1RGliVANxaqg0Ar_W';
const pipI = 'https://pipedapi.kavin.rocks';

export default async function handler(req, res) {

  const {
    piped = pipI,
    invidious = invI,
    pid = pID,
    itag = '251'
  } = req.query;

  const xmlResponse = await main(piped, invidious, pid, itag)

  return res.send(xmlResponse);
}
