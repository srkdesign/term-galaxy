import { useTranslation } from "react-i18next";

import Page from "../../components/Page";
import Hero from "../../components/Hero";
import Search from "../../components/Search";

function Home() {
  const { t } = useTranslation();

  return (
    <Page>
      <Hero
        heading={t("home_heading")}
        description={t("home_description")}
        isHome={true}
      />
      <Search />
    </Page>
  );
}
export default Home;
