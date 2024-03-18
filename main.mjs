export default async function main(pipedInstance, invidiousInstance, playlistID, itag) {
  return await fetch(`${pipedInstance}/rss/playlists/${playlistID}`)
    .then(res => res.text())
    .then(data => data.replaceAll('https://www.youtube.com/watch?v', `${invidiousInstance}/latest_version?itag=${itag}&id`))
}
