import "./App.css";

import { getWords } from "./api/axios";
import { useState, useEffect } from "react";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SearchInput from "./components/SearchInput";
import List from "./components/List";

function App() {
  const [words, setWords] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getWords()
      .then((json) => {
        setWords(json);
        return json;
      })
      .then((json) => {
        setSearchResults(json);
      });
  }, []);

  return (
    <div className="max-w-[1400px] h-[100vh] grid grid-rows-[auto_1fr_auto] my-0 mx-auto ">
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
        <SearchInput
          words={words}
          setSearchResults={setSearchResults}
        ></SearchInput>
        <List searchResults={searchResults}></List>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default App;
