import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  CardFooter,
  Button,
} from "@nextui-org/react";

import { useContext } from "react";
import { SavedWordsContext } from "../contexts/SavedWordsContext";

import UnitedKingdomFlag from "../assets/flags/uk.svg";
import AzerbaijanFlag from "../assets/flags/az.svg";
import RussianFlag from "../assets/flags/ru.svg";
// import SaveButton from "./SaveButton";
// import BookmarkOutline from "../assets/icons/bookmark.svg";
import SavedIcon from "./icons/SavedIcon";
import NotSavedIcon from "./icons/NotSavedIcon";

const Word = ({ word }: { word: any }) => {
  const { addToSavedWords, removeFromSavedWords, isWordSaved } =
    useContext(SavedWordsContext);

  const handleSave = () => {
    if (isWordSaved(word)) {
      removeFromSavedWords(word);
    } else {
      addToSavedWords(word);
    }
  };

  return (
    <Card className="mb-4 pt-4 *:px-6 text-left" shadow="sm">
      <CardHeader className="flex justify-between items-start">
        <header className="flex flex-col items-start pb-4">
          <div className="flex gap-4 items-start mb-1">
            <img src={UnitedKingdomFlag} alt="Flag of United Kingdom" />
            <h2 className="text-3xl font-bold capitalize mb-1 font-serif">
              {word.word_en}
            </h2>
          </div>
          <ul className="flex flex-row gap-2 sm:gap-0 flex-wrap sm:flex-nowrap divide-solid dark:divide-slate-700 sm:divide-x-1 *:pr-2 *:flex *:flex-row *:items-start md:*:items-center *:gap-4">
            <li>
              <img src={AzerbaijanFlag} alt="Flag of Azerbaijan" />
              <h3 className="text-xl font-sans capitalize text-gray-500">
                {word.word_az}
              </h3>
            </li>
            <li className="sm:pl-[12px]">
              <img src={RussianFlag} alt="Flag of Russian Federation" />
              <h3 className="text-xl font-sans capitalize text-gray-500">
                {word.word_ru}
              </h3>
            </li>
          </ul>
        </header>
        <Button onClick={handleSave} isIconOnly size="md" variant="flat">
          {isWordSaved(word) ? <SavedIcon /> : <NotSavedIcon />}
        </Button>
      </CardHeader>
      <Divider />
      <CardBody className="py-4 text-lg font-sans">
        <ul className="flex flex-col gap-6 lowercase *:flex *:gap-4 *:align-baseline">
          <li>
            <small className="uppercase font-bold font-serif w-[4ch]">
              Eng:
            </small>
            <p className="max-w-[62ch]">{word.meaning_eng}</p>
          </li>
          <li>
            <small className="uppercase font-bold font-serif w-[4ch]">
              Aze:
            </small>
            <p className="max-w-[62ch]">{word.meaning_az}</p>
          </li>
          <li>
            <small className="uppercase font-bold font-serif w-[4ch]">
              Rus:
            </small>
            <p className="max-w-[62ch]">{word.meaning_ru}</p>
          </li>
        </ul>
      </CardBody>
      <Divider />
      <CardFooter className="py-4">
        <small className="uppercase">
          <span className="font-bold font-serif mr-1">Source:</span>
          {word.source}
        </small>
      </CardFooter>
    </Card>
  );
};

export default Word;
