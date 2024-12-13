import { useTranslation } from "react-i18next";

import Hero from "../../components/Hero";
import Page from "../../components/Page";
import TextComponent from "../../components/TextComponent";

const Features = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <Hero
        heading={t("features_heading")}
        description={t("features_description")}
        isHome={false}
        marginBottom={20}
      />
      <TextComponent>
        <h2>{t("features_languages_heading")}</h2>
        <p>{t("features_languages")}</p>
        <h2>{t("features_glossaries_heading")}</h2>
        <p>{t("features_glossaries")}</p>
        <h2>{t("features_paths_heading")}</h2>
        <p>{t("features_paths")}</p>
        <h2>{t("features_mobile_heading")}</h2>
        <p>{t("features_mobile")}</p>
      </TextComponent>
    </Page>
  );
};

export default Features;
