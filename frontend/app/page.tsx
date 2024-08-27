import SearchBar from '@/components/search-bar';
import SongResults from '@/components/song-results';
import { Suspense } from 'react';

export default async function Home({
  searchParams,
}: {
  searchParams?: { query: string };
}) {
  const value = searchParams?.query ?? '';

  const response = await fetch(`http://localhost:5000/filter/${value}`);

  const data = await response.json();

  //! Keep this temporary and we will implement this into the data-access
  const formattedData = data.map((song: any) => {
    song.artists = JSON.parse(song.artists.replace(/'/g, '"'));
    return song;
  });

  return (
    <main className="container pt-12">
      <div className="relative max-w-md mx-auto">
        <SearchBar />
        {/* Should I move the logic of when to show results / no results / nothing into the component? */}
        {data.length !== 0 && !!value ? (
          <div className="absolute top-12 w-full">
            <Suspense fallback={<>Loading...</>}>
              <SongResults data={formattedData} />
            </Suspense>
          </div>
        ) : null}
      </div>
    </main>
  );
}
