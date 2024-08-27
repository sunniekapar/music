'use client'

import { Song } from '@/lib/types';
import { createContext, useState } from 'react';

type SongProviderState = {
  selectedSongs: Record<string, Song>;
  selectSong: (song: Song) => void;
};

const initialState: SongProviderState = {
  selectedSongs: {},
  selectSong: () => {},
};

export const SongContext = createContext<SongProviderState>(initialState);

export function SongProvider({ children }: { children: React.ReactNode }) {
  const [selectedSongs, setSelectedSongs] = useState<Record<string, Song>>(() => ({}));

  const handleAddRemoveSong = (song: Song) => {
    setSelectedSongs((prev) => {
      const newSongs = { ...prev };
      if (newSongs[song.id]) {
        delete newSongs[song.id];
      } else {
        newSongs[song.id] = song;
      }
      return newSongs;
    });
  };

  return (
    <SongContext.Provider value={{ selectedSongs, selectSong: handleAddRemoveSong }}>
      {children}
    </SongContext.Provider>
  );
}
