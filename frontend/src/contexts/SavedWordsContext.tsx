import { createContext, ReactNode, useEffect, useState } from "react";
import { WordProps } from "../lib/types";

type SavedWordsContextProviderProps = {
  children: ReactNode;
};

type SavedWordsContextProvider = {
  savedWords: Array<WordProps>;
  addToSavedWords: (word: WordProps) => void;
  removeFromSavedWords: (word: WordProps) => void;
  isWordSaved: (word: WordProps) => boolean;
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

  const addToSavedWords = (word: WordProps) => {
    setSavedWords((prevWords: WordProps[]) => [...prevWords, word]);
  };

  const removeFromSavedWords = (word: WordProps) => {
    setSavedWords((prevWords: WordProps[]) =>
      prevWords.filter((w: WordProps) => w.id !== word.id)
    );
  };

  const isWordSaved = (word: WordProps) => {
    return savedWords.some((w: WordProps) => w.id === word.id);
  };

  return (
    <SavedWordsContext.Provider
      value={{ savedWords, addToSavedWords, removeFromSavedWords, isWordSaved }}
    >
      {children}
    </SavedWordsContext.Provider>
  );
};
