import { useTranslation } from "react-i18next";

import Page from "../../components/Page";
import Hero from "../../components/Hero";
import Search from "../../components/Search";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";

function Home() {
  const { t } = useTranslation();

  return (
    <Page>
      <Hero
        heading={t("home_heading")}
        description={t("home_description")}
        isHome={true}
        marginBottom={20}
      />
      <Search />
      <section className="flex flex-col items-center justify-center w-full pt-40 text-center [&:*:first-child]:w-full">
        <Hero
          heading={t("heading_submit_word")}
          description={t("paragraph_submit_word")}
          isHome={false}
          marginBottom={4}
        />
        <Button
          href="https://forms.gle/zHK2AEm4QZvpF94u8"
          as={Link}
          color="primary"
          showAnchorIcon
          variant="solid"
          isExternal={true}
          className="mt-5 w-fit"
        >
          {t("button_submit_word")}
        </Button>
      </section>

    </Page>
  );
}
export default Home;
