import LoadingIndicator from '@/components/loading-indicator';
import SearchBar from '@/components/search-bar';
import SelectedSongs from '@/components/selected-songs';
import SongResults from '@/components/song-results';
import { Suspense } from 'react';

// If suspense boundary doesnt work in prod, then maybe make this a dynamic route

export default function Home({
  searchParams,
}: {
  searchParams?: { query: string };
}) {
  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(63,63,70,0.3),rgba(0,0,0,0))]" />
      <main className="container pt-12">
        <div className="relative max-w-md mx-auto">
          <SearchBar />
          <div className="absolute top-12 w-full">
            <Suspense key={searchParams?.query} fallback={<LoadingIndicator />}>
              <SongResults params={searchParams} />
            </Suspense>
          </div>
          <SelectedSongs />
        </div>
      </main>
    </>
  );
}
