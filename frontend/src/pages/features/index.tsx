import { useTranslation } from "react-i18next";

import Hero from "../../components/Hero";
import Page from "../../components/Page";
import Paragraph from "../../components/Paragraph";

const Features = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <Hero
        heading={t("features_heading")}
        description={t("features_description")}
        isHome={false}
      />
      <article className="[&>*:not(:last-of-type)]:mb-10">
        <Paragraph title="Three-Language Learning" text="Explore and master terms in three different languages, with options for side-by-side comparisons." />
        <Paragraph title="Comprehensive Glossaries" text="Access an extensive continuously growing database." />
        <Paragraph title="Customizable Learning Paths" text="Choose terms that interest you the most and build your own personalized learning experience." />
        <Paragraph title="Mobile-Friendly" text="Learn on the go! Our platform is optimized for all devices, so you can study wherever you are." />
      </article>
    </Page>
  );
};

export default Features;
