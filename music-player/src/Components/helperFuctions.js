export const albumFilter = (album) => {
  const result = [];
  const map = new Map();
  const albums = Array.from(album);
  for (const item of albums) {
    if (!map.has(item.id)) {
      map.set(item.id, true); // set any value to Map
      result.push({
        id: item.id,
        image: item.cover_medium,
        title: item.title,
        trackLists: item.tracklist,
      });
    }
  }
  return result;
};

export const trackFilter = (track) => {
  const result = [...new Set()];
  const map = new Map();
  const albums = Array.from(track);
  for (const item of albums) {
    if (!map.has(item.id)) {
      map.set(item.id, true); // set any value to Map
      result.push({
        id: item.id,
        image: item.artist.picture,
        title: item.title,
        duration: item.duration,
        artist: item.artist,
        preview: item.preview,
      });
    }
  }
  return result;
};

export const fixInput = (input) => {
  return input.replace(/\s/g, "X");
};
