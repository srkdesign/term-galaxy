import { getWords } from "../../api/axios";
import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import SearchFilter from "../../components/SearchFilter";
import Word from "../../components/Word";

function Home() {
  const [words, setWords] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams("");

  // const navigate = useNavigate();
  // const params = new URLSearchParams();
  // const [searchResults, setSearchResults] = useState([]);

  const wordQuery = searchParams.get("word") || "";

  useEffect(() => {
    getWords().then((json) => {
      setWords(json);
      // Optimization Updates [0/5]
      // return json;
    });
    // .then((json) => {
    //   setSearchParams(json);
    // });
    // .then(() => {
    //   if (wordQuery !== "") {
    //     navigate(`?word=${wordQuery}`);
    //     console.log("123");
    //   }
    //   // setSearchParams(params);
    // });
  }, []);

  // Optimization Updates [1/5]
  const debounce = (func: Function, delay: number) => {
    let timeout: any;
    return function (...args: any) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  // Optimization Updates [2/5]
  const debouncedParams = useMemo(
    () =>
      debounce((params: any) => {
        setSearchParams(params);
      }, 300),
    []
  );

  // Optimization Updates [3/5]
  const filteredWords = useMemo(() => {
    return words.filter(
      (word: any) =>
        word.entry.toLowerCase().includes(wordQuery.toLowerCase()) ||
        word.translations.ru.entry
          .toLowerCase()
          .includes(wordQuery.toLowerCase()) ||
        word.translations.az.entry
          .toLowerCase()
          .includes(wordQuery.toLowerCase())
    );
  }, [words, wordQuery]);

  return (
    <main className="flex flex-col items-center justify-center w-full px-6 pb-24 font-serif text-center text-balance">
      <h1 className="mb-4 font-serif text-4xl font-bold md:text-6xl">
        Mastering Economic Terminology
      </h1>
      <h2 className="mb-16 font-sans text-xl font-normal md:text-2xl text-default-900">
        Your Essential Guide in Azerbaijani, Russian, and English
      </h2>
      <SearchFilter
        wordQuery={wordQuery}
        searchParams={searchParams}
        // Optimization Updates [4/5]
        setSearchParams={debouncedParams}
        // setSearchParams={setSearchParams}
      />
      <ul className="grow w-full max-w-[1200px]">
        {
          // Optimization Updates [5/5]
          // words
          //   .filter(
          //     (word: { word_en: string; word_az: string; word_ru: string }) =>
          //       word.word_en.toLowerCase().includes(wordQuery.toLowerCase()) ||
          //       word.word_az.toLowerCase().includes(wordQuery.toLowerCase()) ||
          //       word.word_ru.toLowerCase().includes(wordQuery.toLowerCase())
          //   )
          filteredWords.slice(0, 5).map((word: any) => (
            <li key={word.id}>
              <Word key={word.id} word={word} />
            </li>
          ))
        }
      </ul>
      {/* <SearchInput words={words} setSearchResults={setSearchParams} />
        <List searchResults={searchParams}></List> */}
    </main>
  );
}

export default Home;
