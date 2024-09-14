import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";

import { useContext } from "react";
import { SavedWordsContext } from "../contexts/SavedWordsContext";

import UnitedKingdomFlag from "../assets/flags/uk.svg";
import AzerbaijanFlag from "../assets/flags/az.svg";
import RussianFlag from "../assets/flags/ru.svg";
import SavedIcon from "./icons/SavedIcon";
import NotSavedIcon from "./icons/NotSavedIcon";
import FlagIcon from "./icons/FlagIcon";
import { WordProps } from "../lib/types";
import { t } from "i18next";

const Word = ({ word }: { word: WordProps }) => {
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
    <Card className="pt-4 *:px-6 text-left" shadow="sm">
      <CardHeader className="flex items-start justify-between gap-5">
        <header className="flex flex-col items-start pb-4">
          <div className="flex items-start gap-2 mb-1 md:gap-3">
            <FlagIcon src={UnitedKingdomFlag} alt="Flag of United Kingdom" />
            <h2 className="mb-3 font-serif text-xl font-bold capitalize md:text-3xl">
              {word.entry}
            </h2>
          </div>
          <ul className="flex flex-row gap-3 md:gap-5 flex-wrap lg:flex-nowrap text-default-900 *:pr-2 *:flex *:flex-row *:items-start md:*:items-center *:gap-2 md:*:gap-3 [&>li>h3]:opacity-80 [&>li>h3]:text-lg [&>li>h3]:md:text-xl [&>li>h3]:capitalize">
            <li>
              <FlagIcon src={AzerbaijanFlag} alt="Flag of Azerbaijan" />
              <h3>
                {word.translations.az.entry}
              </h3>
            </li>
            <li>
              <FlagIcon src={RussianFlag} alt="Flag of Russian Federation" />
              <h3>
                {word.translations.ru.entry}
              </h3>
            </li>
          </ul>
        </header>
        <Button onClick={handleSave} isIconOnly size="md" variant="flat">
          {isWordSaved(word) ? <SavedIcon /> : <NotSavedIcon />}
        </Button>
      </CardHeader>
      <Divider />
      <CardBody className="py-8 font-sans text-lg">
        <ol className="flex flex-col gap-4 *:flex *:flex-col *:md:flex-row *:gap-4 *:align-baseline *:[not(:last-child)]:mb-2 [&>li>p]:text-default-800">
          <li>
            <Chip className="font-bold uppercase opacity-60" size="md">
              en
            </Chip>
            <p>{word.meaning}</p>
          </li>
          <li>
            <Chip className="font-bold uppercase opacity-60" size="md">
              az
            </Chip>
            <p>{word.translations.az.meaning}</p>
          </li>
          <li>
            <Chip className="font-bold uppercase opacity-60" size="md">
              ru
            </Chip>
            <p>{word.translations.ru.meaning}</p>
          </li>
        </ol>
      </CardBody>
      <Divider />
      <CardFooter className="py-4">
        <small className="flex justify-between w-full uppercase text-primary-100">
          <span className="mr-1 font-serif font-bold">{t("source")}</span>
          {word.source}
        </small>
      </CardFooter>
    </Card>
  );
};

export default Word;
