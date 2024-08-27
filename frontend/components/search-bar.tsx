'use client';

import DebouncedInput from '@/components/debounced-input';
import { Search } from 'lucide-react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [value, setValue] = useState('');

  const handleChange = (input: string) => {
    const params = new URLSearchParams(searchParams);
    if (input) {
      params.set('query', input);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);
    setValue(input);
  };

  return (
    <div className="relative">
      <DebouncedInput
        placeholder="Search..."
        debounce={300}
        type="text"
        value={value as string}
        onChange={(value) => handleChange(value as string)}
        className="pl-8"
      />
      <Search className="opacity-50 size-4 absolute left-2 top-0 translate-y-1/2 mt-1" />
    </div>
  );
}
