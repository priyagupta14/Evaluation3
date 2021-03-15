const categorizedByGenre = (songs) => songs.reduce((acc, song) => {
  const { name } = song.genre;
  if (!acc[name]) {
    acc[name] = [];
  }
  acc[name].push(song);
  return acc;
}, {});

export default categorizedByGenre;
