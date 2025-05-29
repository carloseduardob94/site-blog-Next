import { cn } from "@/lib/utils";
import { CircleX, SearchIcon } from "lucide-react";
import { useRouter } from "next/router";
import { useCallback } from "react";

export function Search() {
  const router = useRouter();
  const query = (router.query.q as string) ?? '';


  const handleSearch = useCallback((event: React.FormEvent) => {
    event.preventDefault();

    if (query.trim()) {
      router.push(`/blog?q=${encodeURIComponent(query)}`);
    }
  }, [query, router])

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;

    router.push(`/blog?q=${encodeURIComponent(newQuery)}`, undefined, { shallow: true, scroll: false });
  }

  const resetSearch = () => {
    router.push('/blog', undefined, { shallow: true, scroll: false });
  }

  return (
    <form className="relative group w-full md:w-60" onSubmit={handleSearch}>
      <SearchIcon className={cn('text-gray-300 absolute left-3 top-1/2  -translate-y-1/2 h-4 w-4 transition-colors duration-300 group-focus-within:text-blue-300',
        `${query ? 'text-blue-300' : ''}`)} />

      <input
        type="text"
        placeholder="Buscar"
        value={query}
        onChange={handleQueryChange}
        className="h-10 w-full md:w-60 bg-transparent border border-gray-400 pl-9 text-gray-100 rounded-md text-body-sm outline-none transition-all duration-300 focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300 placeholder:text-gray-300 placeholder:text-body-sm"
      />

      {query && <CircleX className="text-gray-300 w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" onClick={resetSearch} />}
    </form>
  )
}