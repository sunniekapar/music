import Image from 'next/image';
import { Card, CardContent } from './ui/card';

async function fetchSongs(songName: string) {
  const response = await fetch(`http://localhost:5000/filter/${songName}`);
  const data = await response.json();

  const formattedData = data.map((song: any) => {
    try {
      song.artists = JSON.parse(song.artists.replace(/'/g, '"'));
    } catch (error) {
      console.error('Invalid JSON format for artists:', song.artists, error);
      song.artists = [];
    }
    return song;
  });

  return formattedData;
}

export default async function SongResults({
  params,
}: {
  params?: { query: string } | undefined;
}) {
  const songName = params?.query ?? '';
  if (!songName) return;

  const data = await fetchSongs(songName);

  if (data.length === 0) {
    return (
      <div className="flex justify-center">
        <p>No results</p>
      </div>
    );
  }

  //! Keep this temporary and we will implement this into the data-access
  return (
    <Card className="w-full pt-6">
      {data.map((song: any) => (
        <CardContent key={song.id} className="flex gap-4">
          <div className="size-[80px] relative bg-zinc-50 shrink-0">
            <Image
              src={song.image}
              width={80}
              height={80}
              alt={`${song.name} image`}
              className="object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col max-w-[275px]">
            <p className="font-semibold truncate">{song.name}</p>
            <small className="truncate opacity-80">
              {song.artists.map(
                (artist: any, index: number) =>
                  `${artist}${index !== song.artists.length - 1 ? ', ' : ''}`
              )}
            </small>
          </div>
        </CardContent>
      ))}
    </Card>
  );
}
