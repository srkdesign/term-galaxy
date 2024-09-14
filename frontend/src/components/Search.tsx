import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useWords from "../hooks/useWords";

import { Spinner } from "@nextui-org/spinner";
import { DEBOUNCE_TIME, LIMIT } from "../lib/constants";

import { WordProps } from "../lib/types";

import WordList from "./WordList";
import { debounce } from "lodash";
import SearchForm from "./SearchForm";
import LoadMoreButton from "./LoadMoreButton";

const Search = () => {
  // Set initial values for fetching data
  const [input, setInput] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const [offset, setOffset] = useState<number>(0);

  const [words, setWords] = useState<WordProps[]>([]);

  // Get data from react query custom hook
  const { data, isLoading, error } = useWords({
    offset: offset,
    query: query,
  });

  // Write changing value of search into input constant
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);

  // Transfer input's value into URL, update words list and reset offset value
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (input !== query) {
        setOffset(0);
        setWords([]);
      }
      setSearchParams({ q: input });
    },
    [input, query, setSearchParams]
  );

  // Sync input and URL query values and refresh the words array
  useEffect(() => {
    setInput(query);
    // setOffset(0);
    // setWords([]);
  }, [query]);

  // Using debounce to optimize performance
  const handleLoadMore = useCallback(
    debounce(() => {
      setOffset((prevOffset) => prevOffset + LIMIT);
    }, DEBOUNCE_TIME),
    [LIMIT]
  );

  useEffect(() => {
    if (data && data.results) {
      setWords((prevWords) => [...prevWords, ...data.results]);
    }
  }, [data]);

  // const inputRef = useRef<HTMLInputElement | null>(null);

  // Show snippet on data load
  if (isLoading)
    return (
      <div className="flex flex-col items-center justify-center col-span-full">
        <Spinner className="mb-2" color="default" label="Loading..." />
      </div>
    );

  // Show message on fetching data error
  if (error)
    return (
      <div className="flex flex-col items-center justify-center col-span-full">
        <span>Error:</span> <span>{error.message}</span>
      </div>
    );

  return (
    <>
      <SearchForm
        input={input}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <WordList items={words} isReverse={false} />
      {/* Show Load More Button only when there is a next page */}
      <LoadMoreButton onClick={handleLoadMore} show={!!data?.next} />
    </>
  );
};

export default Search;
