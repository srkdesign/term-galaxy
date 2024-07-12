import { Input } from "@nextui-org/react";
import { Form } from "react-router-dom";

export const SearchInput = ({
  words,
  setSearchResults,
}: {
  words: any;
  setSearchResults: any;
}) => {
  const handleSubmit = (e: { preventDefault: () => any }) => e.preventDefault();

  const handleSearchChange = (e: { target: { value: string } }) => {
    if (!e.target.value) return setSearchResults(words);

    const resultsArray = words.filter((word: { word_en: string }) =>
      word.word_en.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setSearchResults(resultsArray);
  };

  return (
    <Form onSubmit={handleSubmit} className="flex gap-2 mb-24" role="search">
      <Input
        type="text"
        onChange={handleSearchChange}
        placeholder="Type here to search..."
        className="min-w-[20rem] font-sans"
        size="lg"
        name="q"
      />
    </Form>
  );
};

export default SearchInput;
