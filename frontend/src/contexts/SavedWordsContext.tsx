import { createContext, ReactNode, useEffect, useState } from "react";

type SavedWordsContextProviderProps = {
  children: ReactNode;
};

type SavedWordsContextProvider = {
  savedWords: Array<string>;
  addToSavedWords: any;
  removeFromSavedWords: any;
  isWordSaved: any;
};

export const SavedWordsContext = createContext({} as SavedWordsContextProvider);

export const SavedWordsProvider = ({
  children,
}: SavedWordsContextProviderProps) => {
  const [savedWords, setSavedWords] = useState(() => {
    const savedWordsFromStorage = localStorage.getItem("savedWords");
    return savedWordsFromStorage ? JSON.parse(savedWordsFromStorage) : [];
  });

  useEffect(() => {
    localStorage.setItem("savedWords", JSON.stringify(savedWords));
  }, [savedWords]);

  const addToSavedWords = (word: any) => {
    setSavedWords((prevWords: any) => [...prevWords, word]);
  };

  const removeFromSavedWords = (word: any) => {
    setSavedWords((prevWords: any) =>
      prevWords.filter((w: any) => w.id !== word.id)
    );
  };

  const isWordSaved = (word: any) => {
    return savedWords.some((w: any) => w.id === word.id);
  };

  // OLD
  // const addToSaved = (word: any) => {
  //   const isWordSaved = savedWords.find(
  //     (savedWord: any) => savedWord.id === word.id
  //   );

  //   if (isWordSaved) {
  //     setSavedWords([...savedWords, { ...word }]);
  //   }
  // };

  // useEffect(() => {
  //   localStorage.setItem("savedWords", JSON.stringify(savedWords));
  // }, [savedWords]);

  // useEffect(() => {
  //   const storedSavedWords = localStorage.getItem("savedWords");
  //   if (storedSavedWords) {
  //     setSavedWords(JSON.parse(storedSavedWords));
  //   }
  // }, []);

  return (
    <SavedWordsContext.Provider
      value={{ savedWords, addToSavedWords, removeFromSavedWords, isWordSaved }}
    >
      {children}
    </SavedWordsContext.Provider>
  );
};
