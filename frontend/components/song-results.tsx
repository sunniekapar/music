import SongCard from './song-card';
import { Card, CardContent } from './ui/card';
import { fetchSongs } from '@/lib/data-access';

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

  return (
    <Card className="w-full pt-6 bg-card/20">
      <CardContent className="space-y-4">
        {data.map((song: any) => (
          <SongCard key={song.id} song={song} />
        ))}
      </CardContent>
    </Card>
  );
}
