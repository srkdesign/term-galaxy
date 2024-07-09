import { Input, Button } from "@nextui-org/react";

export const SearchInput = ({ words, setSearchResults }) => {
  const handleSubmit = (e: { preventDefault: () => any }) => e.preventDefault();

  const handleSearchChange = (e: { target: { value: any } }) => {
    if (!e.target.value) return setSearchResults(words);

    const resultsArray = words.filter((word: { word_en: string }) =>
      word.word_en.includes(e.target.value)
    );

    setSearchResults(resultsArray);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-24">
      <Input
        type="text"
        onChange={handleSearchChange}
        placeholder="Type here to search..."
        className="min-w-[20rem] font-sans"
        size="lg"
      />
    </form>
  );
};

export default SearchInput;
