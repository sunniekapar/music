import SearchBar from '@/components/search-bar';
import SongResults from '@/components/song-results';
import { MoreHorizontal } from 'lucide-react';
import { Suspense } from 'react';

export default function Home({
  searchParams,
}: {
  searchParams?: { query: string };
}) {
  return (
    <main className="container pt-12">
      <div className="relative max-w-md mx-auto">
        <SearchBar />
        {/* This suspense boundary is not working for some reason */}
        <div className="absolute top-12 w-full">
          <Suspense
            key={searchParams?.query}
            fallback={
              <div className="flex justify-center py-2">
                <MoreHorizontal className="animate-pulse" />
              </div>
            }
          >
            <SongResults params={searchParams} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
