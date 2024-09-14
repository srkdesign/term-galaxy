import React from "react";
import SearchIcon from "./icons/SearchIcon";
import { Input } from "@nextui-org/input";
import { t } from "i18next";

interface SearchInputProps {
  input: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ input, onChange }: SearchInputProps) => {
  return (
    <Input
      // ref={ref}
      name="q"
      type="search"
      value={input}
      onChange={onChange}
      placeholder={t("search_input")}
      classNames={{
        base: "font-sans mb-7 md:mb-10 text-primary-100",
        inputWrapper: "border-small border-default-200 dark:shadow-md shadow-sm",
      }}
      color="default"
      size="lg"
      variant="flat"
      endContent={<SearchIcon />}
    />
  );
};

export default SearchInput;
