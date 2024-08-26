'use client';

import DebouncedInput from '@/components/debounced-input';
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
    <DebouncedInput
      type="text"
      value={value as string}
      onChange={(value) => handleChange(value as string)}
    />
  );
}
