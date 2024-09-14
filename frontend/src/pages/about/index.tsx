import { useTranslation } from "react-i18next";

import Hero from "../../components/Hero";
import Page from "../../components/Page";
import Paragraph from "../../components/Paragraph";

const About = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <Hero
        heading={t("about_heading")}
        description={t("about_description")}
        isHome={false}
      />
      <article className="[&>*:not(:last-of-type)]:mb-4">
        <Paragraph title="Design" text="Whether you're a student, a professional, or just passionate about languages, our platform is designed to help you expand your vocabulary and deepen your understanding of key terms. At Term Galaxy, we believe that language is the key to unlocking new opportunities and building connections. That’s why we’ve created an intuitive, user-friendly platform for learners of all levels. No matter where you are on your language journey, Term Galaxy empowers you to explore, learn, and grow." />
        <Paragraph title="Mission" text="Our mission is simple: to make learning terms fun, accessible, and effective for everyone. Whether you’re preparing for exams, learning for work, or simply want to stay multilingual, we’re here to support your goals.
" />
      </article>

    </Page>
  );
};

export default About;
