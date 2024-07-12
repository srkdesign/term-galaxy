import "./App.css";

import { getWords } from "./api/axios";
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SearchFilter from "./components/SearchFilter";
// import SearchInput from "./components/SearchInput";
// import List from "./components/List";
import Word from "./components/Word";

function App() {
  const [words, setWords] = useState([]);
  const navigate = useNavigate();
  const params = new URLSearchParams();

  const [searchParams, setSearchParams] = useSearchParams("");
  // const [searchResults, setSearchResults] = useState([]);

  const wordQuery = searchParams.get("word") || "";

  useEffect(() => {
    getWords()
      .then((json) => {
        setWords(json);
        return json;
      })
      // .then((json) => {
      //   setSearchParams(json);
      // });
      .then(() => {
        setSearchParams(params);
        navigate(`?word=${wordQuery}`);
      });
  }, []);

  return (
    <div className="max-w-[1400px] min-h-full grid grid-rows-[auto_1fr_auto] my-0 mx-auto ">
      <NavBar></NavBar>
      <section
        id="hero"
        className="flex flex-col justify-center items-center px-6 font-serif text-balance text-center pb-24"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-3">
          Mastering Economic Terminology
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-12 font-sans">
          Your Essential Guide in Azerbaijani, Russian, and English
        </h2>
        <SearchFilter
          wordQuery={wordQuery}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
        <ul className="grow">
          {words
            .filter((word: { word_en: string }) =>
              word.word_en.toLowerCase().includes(wordQuery.toLowerCase())
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
      <Footer />
    </div>
  );
}

export default App;
