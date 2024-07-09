import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  CardFooter,
} from "@nextui-org/react";

const Word = ({ word }: { word: any }) => {
  return (
    <Card className="mb-4 pt-4 *:px-6 w-[124ch]" shadow="md">
      <CardHeader className="flex flex-col items-start pb-4">
        <h2 className="text-3xl font-bold capitalize mb-1">{word.word_en}</h2>
        <ul className="flex flex-row divide-x-1 divide-solid *:pr-2 *:flex *:flex-row *:items-center *:gap-2">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path fill="#dd4446" d="M1 11H31V21H1z"></path>
              <path
                d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
                fill="#52b4de"
              ></path>
              <path
                d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
                transform="rotate(180 16 24)"
                fill="#649e3f"
              ></path>
              <path
                d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                opacity=".15"
              ></path>
              <path
                d="M15.593,19.056c-1.688,0-3.056-1.368-3.056-3.056s1.368-3.056,3.056-3.056c.822,0,1.568,.325,2.117,.853-.669-.889-1.733-1.465-2.932-1.465-2.025,0-3.667,1.642-3.667,3.667s1.642,3.667,3.667,3.667c1.199,0,2.263-.575,2.932-1.465-.549,.528-1.295,.853-2.117,.853Z"
                fill="#fff"
              ></path>
              <path
                d="M18.852,13.963l.39,1.096,1.051-.499-.499,1.051,1.096,.39-1.096,.39,.499,1.051-1.051-.499-.39,1.096-.39-1.096-1.051,.499,.499-1.051-1.096-.39,1.096-.39-.499-1.051,1.051,.499,.39-1.096Z"
                fill="#fff"
              ></path>
              <path
                d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                fill="#fff"
                opacity=".2"
              ></path>
            </svg>
            <h3 className="text-xl font-sans capitalize text-gray-500">
              {word.word_az}
            </h3>
          </li>
          <li className="pl-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path fill="#1435a1" d="M1 11H31V21H1z"></path>
              <path
                d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
                fill="#fff"
              ></path>
              <path
                d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
                transform="rotate(180 16 24)"
                fill="#c53a28"
              ></path>
              <path
                d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                opacity=".15"
              ></path>
              <path
                d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                fill="#fff"
                opacity=".2"
              ></path>
            </svg>
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
