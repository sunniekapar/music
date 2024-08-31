export async function fetchSongs(songName: string) {
  const response = await fetch(`http://localhost:5000/filter/${songName}`);
  const data = await response.json();

  const formattedData = data.map((song: any) => {
    try {
      song.artists = JSON.parse(song.artists.replace(/'/g, '"'));
    } catch (error) {
      console.error("Invalid JSON format for artists:", song.artists, error);
      song.artists = [];
    }
    return song;
  });

  return formattedData;
}
