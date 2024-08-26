import SearchBar from '@/components/search-bar';

export default function Home({
  searchParams,
}: {
  searchParams?: { query: string };
}) {
  const value = searchParams?.query;

  return (
    <main className="container pt-12">
      <SearchBar />
      {value}
    </main>
  );
}
