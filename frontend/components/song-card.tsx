'use client';

import Image from 'next/image';
import { Song } from '@/lib/types';
import { useContext } from 'react';
import { SongContext } from './context/song-provider';
import { CircleCheck } from 'lucide-react';

export default function SongCard({ song }: { song: Song }) {
  const { selectedSongs, selectSong } = useContext(SongContext);

  return (
    <div
      className="flex gap-4 group cursor-pointer"
      onClick={() => selectSong(song)}
    >
      {/* <div className="fixed -translate-y-1/2 -translate-x-1/2 -z-10 top-1/2 left-1/2 w-[110%] h-[110%] blur-[300px] rotate-180 pointer-events-none">
              <Image
                src={song.image}
                fill
                quality={1}
                alt={`${song.name} image`}
                className="object-cover hidden group-hover:block group-hover:animate-in duration-1000 transition-all"
              />
            </div> */}
      <div className="size-[80px] relative shrink-0">
        <Image
          src={song.image}
          width={80}
          height={80}
          alt={`${song.name} image`}
          className="object-cover rounded-lg"
        />
        {selectedSongs[song.id] ? (
          <div className="absolute w-full h-full bg-background/80 top-0 rounded-lg grid place-items-center animate-in">
            <CircleCheck className="text-primary" />
          </div>
        ) : null}
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
    </div>
  );
}
