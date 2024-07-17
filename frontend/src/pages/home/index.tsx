import { getWords } from "../../api/axios";
import { useState, useEffect } from "react";
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
      return json;
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

  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-center px-6 font-serif text-balance text-center pb-24"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Mastering Economic Terminology
      </h1>
      <h2 className="text-xl md:text-2xl font-normal mb-16 font-sans">
        Your Essential Guide in Azerbaijani, Russian, and English
      </h2>
      <SearchFilter
        wordQuery={wordQuery}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <ul className="grow">
        {words
          .filter(
            (word: { word_en: string; word_az: string; word_ru: string }) =>
              word.word_en.toLowerCase().includes(wordQuery.toLowerCase()) ||
              word.word_az.toLowerCase().includes(wordQuery.toLowerCase()) ||
              word.word_ru.toLowerCase().includes(wordQuery.toLowerCase())
          )
          .slice(0, 5)
          .map((word: any) => (
            <li key={word.id}>
              <Word key={word.id} word={word} />
            </li>
          ))}
      </ul>
      {/* <SearchInput words={words} setSearchResults={setSearchParams} />
        <List searchResults={searchParams}></List> */}
    </section>
  );
}

export default Home;
