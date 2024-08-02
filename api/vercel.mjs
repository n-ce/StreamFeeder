
export default async function handler(req, res) {

  res.setHeader('content-type', 'application/rss+xml');

  return fetch(`https://pipedapi.kavin.rocks/rss/playlists/${req.query.id || 'PLycDFnZLmfaDgAij1RGliVANxaqg0Ar_W'}`)
    .then(res => res.text())
    .then(async xml => {
      const values = xml
        .split('\n')
        .filter(v => v.includes('<link>') && v.includes('watch?v='))
        .map(v => v.slice(12, 55));

      for await (const v of values)
        await fetch('https://api.cobalt.tools/api/json', {
          method: 'POST',
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify({
            url: v,
            isAudioOnly: true,
            aFormat: 'opus',
            filenamePattern: 'basic'
          })
        })
          .then(_ => _.json())
          .then(data => { xml = xml.replace(v, data.url) })


      return res.send(xml);
    });


}
