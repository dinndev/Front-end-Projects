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
        image: item.album.cover_medium,
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

export const initial = {
  y: 30,
  opacity: 0,
};
export const animate = {
  y: 0,
  opacity: 1,
};
export const exit = {
  y: 30,
  opacity: 0,
};
export const transition = {
  row: 0.6,
  tracks: 0.7,
  player: 0.7,
};

export const artists = [
  "conan gray",
  "ariana grande",
  "justin bieber",
  "rex orange county",
  "alessia cara",
  "jeremy sucker",
  "troye sivan",
  "lemon boy",
  "lauv",
  "lany",
  "lorde",
  "pentatonix",
  "olivia rodrigo",
  "joji",
  "alec benjamin",
];

export const randomSearch = (artist) => {
  return artists[Math.floor(Math.random() * artist.length)];
};
