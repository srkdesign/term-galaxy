import React from "react";
import SearchInput from "./SearchInput";

interface SearchFormProps {
  input: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchForm = ({ input, onChange, onSubmit }: SearchFormProps) => {
  return (
    <form onSubmit={onSubmit} className="flex gap-2" autoComplete="off">
      <SearchInput input={input} onChange={onChange} />
    </form>
  );
};

export default SearchForm;
