export async function getData(instance, id) {

  const playlistPoint = '/api/v1/playlists/';
  const url = instance + playlistPoint + id;
  return fetch(url)
    .then(res => res.json())
    .then(data => data.videos.map(v => v.videoId));
}
