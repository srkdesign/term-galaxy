import { useTranslation } from "react-i18next";

import Hero from "../../components/Hero";
import Page from "../../components/Page";
import Paragraph from "../../components/Paragraph";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <Hero
        heading={t("contacts_heading")}
        description={t("contacts_description")}
        isHome={false}
      />
      <article className="[&>*:not(:last-of-type)]:mb-10">
        <Paragraph title="Email" text="support@termgalaxy.az" />
        <Paragraph title="Additional Support" text="For additional support, feel free to reach out via our contact form, and we’ll respond within 24 hours." />
      </article>
    </Page>
  );
};

export default Contact;
