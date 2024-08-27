'use client';

import { useContext } from "react";
import { SongContext } from "./context/song-provider";
import { Song } from "@/lib/types";

export default function SelectedSongs() {
  const {selectedSongs} = useContext(SongContext)
  
  const songs : Array<Song> = Object.values(selectedSongs);

  return (
    <>
    {songs.map(song => <>{song.name}</>)}
    </>
  )
}
