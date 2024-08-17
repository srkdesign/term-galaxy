import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  CardFooter,
  Button,
  Chip,
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
      <CardHeader className="flex items-start justify-between">
        <header className="flex flex-col items-start pb-4">
          <div className="flex items-start gap-4 mb-1">
            <img
              src={UnitedKingdomFlag}
              alt="Flag of United Kingdom"
              className="dark:opacity-85"
            />
            <h2 className="mb-1 font-serif text-3xl font-bold capitalize">
              {word.word_en}
            </h2>
          </div>
          <ul className="flex flex-row gap-2 sm:gap-0 flex-wrap sm:flex-nowrap divide-solid sm:divide-x-1 dark:divide-default-200 text-default-900 *:pr-2 *:flex *:flex-row *:items-start md:*:items-center *:gap-4">
            <li>
              <img
                src={AzerbaijanFlag}
                alt="Flag of Azerbaijan"
                className="dark:opacity-85"
              />
              <h3 className="font-sans text-xl capitalize">{word.word_az}</h3>
            </li>
            <li className="sm:pl-[12px]">
              <img
                src={RussianFlag}
                alt="Flag of Russian Federation"
                className="dark:opacity-85"
              />
              <h3 className="font-sans text-xl capitalize">{word.word_ru}</h3>
            </li>
          </ul>
        </header>
        <Button onClick={handleSave} isIconOnly size="md" variant="flat">
          {isWordSaved(word) ? <SavedIcon /> : <NotSavedIcon />}
        </Button>
      </CardHeader>
      <Divider />
      <CardBody className="py-4 font-sans text-lg">
        <ol className="flex flex-col gap-4">
          <li className="flex gap-4 align-baseline">
            <Chip className="font-bold uppercase" size="md">
              en
            </Chip>
            <p className="">{word.meaning_eng}</p>
          </li>
          <li className="flex gap-4 align-baseline">
            <Chip className="font-bold uppercase" size="md">
              az
            </Chip>
            <p className="">{word.meaning_az}</p>
          </li>
          <li className="flex gap-4 align-baseline">
            <Chip className="font-bold uppercase" size="md">
              ru
            </Chip>
            <p className="">{word.meaning_ru}</p>
          </li>
        </ol>
      </CardBody>
      <Divider />
      <CardFooter className="py-4">
        <small className="uppercase">
          <span className="mr-1 font-serif font-bold">Source:</span>
          {word.source}
        </small>
      </CardFooter>
    </Card>
  );
};

export default Word;
