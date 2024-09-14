import { useContext } from "react";
import { SavedWordsContext } from "../../contexts/SavedWordsContext";
import { t } from "i18next";

import Page from "../../components/Page";
import Hero from "../../components/Hero";
import WordList from "../../components/WordList";

const Saved = () => {
  const { savedWords } = useContext(SavedWordsContext);
  return (
    <Page >
      <Hero
        heading={t("saved_heading")}
        description={t("saved_description")}
        isHome={false}
      />
      <WordList items={savedWords} isReverse={true} />
    </Page>
  );
};

export default Saved;
