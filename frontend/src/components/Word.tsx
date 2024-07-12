import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  CardFooter,
} from "@nextui-org/react";

import UnitedKingdomFlag from "../assets/flags/uk.svg";
import AzerbaijanFlag from "../assets/flags/az.svg";
import RussianFlag from "../assets/flags/ru.svg";

const Word = ({ word }: { word: any }) => {
  return (
    <Card className="mb-4 pt-4 *:px-6 w-[124ch]" shadow="md">
      <CardHeader className="flex flex-col items-start pb-4">
        <div className="flex gap-2 items-start">
          <img src={UnitedKingdomFlag} alt="Flag of United Kingdom" />
          <h2 className="text-3xl font-bold capitalize mb-1">{word.word_en}</h2>
        </div>
        <ul className="flex flex-row divide-x-1 divide-solid *:pr-2 *:flex *:flex-row *:items-center *:gap-2">
          <li>
            <img src={AzerbaijanFlag} alt="Flag of Azerbaijan" />
            <h3 className="text-xl font-sans capitalize text-gray-500">
              {word.word_az}
            </h3>
          </li>
          <li className="pl-[10px]">
            <img src={RussianFlag} alt="Flag of Russian Federation" />
            <h3 className="text-xl font-sans capitalize text-gray-500">
              {word.word_ru}
            </h3>
          </li>
        </ul>
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
