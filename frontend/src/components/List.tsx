import Word from "./Word";

const List = ({ searchResults }: { searchResults: Array<string> }) => {
  const results = searchResults.map((word: any) => (
    <Word key={word.id} word={word}></Word>
  ));

  const content = results?.length ? results.slice(0, 5) : <p>No results</p>;

  return <main>{content}</main>;
};

export default List;
