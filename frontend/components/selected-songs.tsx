"use client";

import { useContext } from "react";
import { SongContext } from "./context/song-provider";
import { Song } from "@/lib/types";
import { X } from "lucide-react";
import { Button } from "./ui/button";

export default function SelectedSongs() {
  const { selectedSongs } = useContext(SongContext);

  const songs: Array<Song> = Object.values(selectedSongs);

  return (
    <section className="space-y-3 pt-6">
      <h2 className="text-2xl font-bold">Selected songs</h2>
      <ul className="space-y-1.5">
        {songs.map((song) => (
          <li
            key={`${song.id}_${song.duration_ms}`}
            className="group flex flex-row-reverse justify-between"
          >
            <Button variant="ghost" size="icon">
              <X className="peer size-4 scale-90 cursor-pointer opacity-0 transition-all duration-100 group-hover:scale-100 group-hover:opacity-100" />
            </Button>
            <p className="after:ease-[cubic-bezier(0.65_0.05_0.36_1)] relative transition-all duration-300 after:absolute after:left-0 after:top-1/2 after:h-0.5 after:w-full after:origin-left after:-translate-y-1/2 after:scale-x-0 after:bg-primary after:transition-all after:duration-100 peer-hover:text-muted-foreground peer-hover:after:scale-x-100 peer-hover:after:bg-muted-foreground">
              {song.name}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
