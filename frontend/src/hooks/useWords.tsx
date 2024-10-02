import { useQuery } from "react-query";
import axios from "axios";

import { BASE_URL, LIMIT } from "../lib/constants";
import { WordResponseProps, WordQueryParamsProps } from "../lib/types";

const fetchWords = async (
  params: WordQueryParamsProps
): Promise<WordResponseProps> => {
  const { limit = LIMIT, offset, query } = params;
  const response = await axios.get<WordResponseProps>(
    `${BASE_URL}?limit=${limit}&offset=${offset}&q=${query}`
  );
  return response.data;
};

const useWords = (params: WordQueryParamsProps) =>
  useQuery<WordResponseProps, Error>({
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
    queryKey: ["words", params],
    queryFn: () => fetchWords(params),
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

export default useWords;
