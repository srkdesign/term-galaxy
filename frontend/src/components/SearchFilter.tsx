import { Input } from "@nextui-org/react";
import { useEffect, useState } from "react";

import SearchIcon from "./icons/SearchIcon";

const SearchFilter = ({
  wordQuery,
  setSearchParams,
}: {
  wordQuery: any;
  searchParams: any;
  setSearchParams: any;
}) => {
  const [searchResults, setSearchResults] = useState(wordQuery);
  // const [debounceValue] = useDebounce(searchResults, 300);

  useEffect(() => {
    setSearchResults(wordQuery);
  }, [wordQuery]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const form = e.target;
    const query = form.search.value;
    const params: any = {};

    if (query.length) params.word = query;
    setSearchParams(params);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 mb-20"
      autoComplete="off"
    >
      <Input
        name="search"
        type="search"
        value={searchResults}
        onChange={(e) => setSearchResults(e.target.value)}
        placeholder="Type here to search..."
        className="min-w-[22rem] font-sans"
        color="warning"
        size="lg"
        variant="bordered"
        endContent={<SearchIcon />}
      />
    </form>
  );
};

export default SearchFilter;
