import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  CardFooter,
} from "@nextui-org/react";

const Word = ({ word }) => {
  return (
    <Card className="mb-4 pt-4 *:px-6 w-[124ch]" shadow="md">
      <CardHeader className="flex flex-col items-start pb-4">
        <h2 className="text-3xl font-bold capitalize mb-1">{word.word_en}</h2>
        <ul className="flex flex-row divide-x-1 divide-solid *:pr-2">
          <li>
            <h3 className="text-xl font-sans capitalize text-gray-500">
              {word.word_az}
            </h3>
          </li>
          <li className="pl-2">
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
