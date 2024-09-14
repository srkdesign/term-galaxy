import { useTranslation } from "react-i18next";
import { getYear } from "../utils/helpers";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="flex flex-col justify-center w-full p-6 sm:flex-row col-span-full xl:col-span-6 xl:col-start-2 min-h-16">
      <div className="flex flex-col *:first:mb-4">
        <p className="text-center opacity-60">
          © {getYear()} SDF. {t("footer_copyright")}
        </p>
      </div>
    </footer>
  );
}
