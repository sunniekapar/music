import SearchBar from '@/components/search-bar';
import { Suspense } from 'react';

export default async function Home({
  searchParams,
}: {
  searchParams?: { query: string };
}) {
  const value = searchParams?.query ?? '';

  const response = await fetch(`http://localhost:5000/filter/${value}`);

  const data = await Promise.resolve(response);

  return (
    <main className="container pt-12">
      <SearchBar />
      <Suspense fallback={<>Loading...</>}>
        {!data ? <>Nothing</> : <>something</>}
      </Suspense>
    </main>
  );
}
