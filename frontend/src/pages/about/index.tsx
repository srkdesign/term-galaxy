import { useTranslation } from "react-i18next";

import Hero from "../../components/Hero";
import Page from "../../components/Page";
import TextComponent from "../../components/TextComponent";

const About = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <Hero
        heading={t("about_heading")}
        description={t("about_description")}
        isHome={false}
        marginBottom={20}
      />
      <TextComponent>
        <p>{t("about_main")}</p>
        <h2>{t("about_mission_heading")}</h2>
        <p>{t("about_mission")}</p>
      </TextComponent>
    </Page>
  );
};

export default About;
