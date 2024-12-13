import { useTranslation } from "react-i18next";

import Hero from "../../components/Hero";
import Page from "../../components/Page";
import TextComponent from "../../components/TextComponent";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <Hero
        heading={t("contacts_heading")}
        description={t("contacts_description")}
        isHome={false}
        marginBottom={20}
      />
      <TextComponent>
        <h2>{t("contact_email")}</h2>
        <p>support@termgalaxy.com</p>
        <h2>{t("contact_support_heading")}</h2>
        <p>{t("contact_support")}</p>
      </TextComponent>
    </Page>
  );
};

export default Contact;
