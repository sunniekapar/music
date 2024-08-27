import Image from 'next/image';
import { Card, CardContent } from './ui/card';

export default function SongResults({ data }: { data: any }) {
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
