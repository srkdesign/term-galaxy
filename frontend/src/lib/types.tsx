export interface TranslationProps {
  entry: string;
  meaning: string;
}

interface TranslationListProps {
  [language: string]: TranslationProps;
}

export interface WordProps {
  id: number;
  entry: string;
  meaning: string;
  translations: TranslationListProps;
  source: string;
  published: Date;
}

export interface WordResponseProps {
  count: number;
  next: string | null;
  previous: string | null;
  results: WordProps[];
}

export interface WordQueryParamsProps {
  limit?: number;
  offset?: number;
  query?: string;
}