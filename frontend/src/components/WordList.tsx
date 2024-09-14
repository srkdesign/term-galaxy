import { WordProps } from "../lib/types";
import Word from "./Word";

interface WordListProps {
  items: Array<WordProps>;
  isReverse: boolean;
}

const WordList = ({ items, isReverse }: WordListProps) => {
  // Reverse items in the array is isReverse is true
  const words = isReverse ? [...items].reverse() : items;

  return (
    <>
      {items.length > 0 && (
        <ul className="flex flex-col col-span-4 gap-7 md:gap-10">
          {words.map((item, index) => (
            <li key={index}>
              <Word word={item} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default WordList;
