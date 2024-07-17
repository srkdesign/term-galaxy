import { useContext } from "react";
import { SavedWordsContext } from "../../contexts/SavedWordsContext";
import Word from "../../components/Word";

const Saved = () => {
  const { savedWords } = useContext(SavedWordsContext);
  return (
    <section className="flex flex-col justify-center items-center px-6 font-serif text-balance text-center pb-24 w-full">
      <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
        Saved Words
      </h1>
      <h2 className="text-xl md:text-2xl font-normal mb-20 font-sans">
        Here you can find all the words that you saved
      </h2>
      <ul className="grow w-full max-w-[1200px]">
        {savedWords
          .slice(0)
          .reverse()
          .map((word: any) => (
            <li key={word.id}>
              <Word word={word} />
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Saved;
