import SongCard from "./song-card";
import { fetchSongs } from "@/lib/data-access";
import { ScrollArea } from "./ui/scroll-area";

export default async function SongResults({
  params,
}: {
  params?: { query: string } | undefined;
}) {
  const songName = params?.query ?? "";
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
    <ScrollArea
      id="song-results"
      className="h-[600px] w-full rounded-md border bg-card/20 p-4 pt-6 backdrop-blur-sm"
    >
      <div className="space-y-4">
        {data.map((song: any) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </ScrollArea>
  );
}
