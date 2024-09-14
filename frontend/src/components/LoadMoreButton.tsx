import { Button } from "@nextui-org/button";
import { t } from "i18next";

interface LoadMoreButtonProps {
  onClick: () => void;
  show: boolean;
}

const LoadMoreButton = ({ onClick, show }: LoadMoreButtonProps) => {
  if (!show) return null;
  return (
    <Button onClick={onClick} className="mt-10">
      {t("load_more_button")}
    </Button>
  );
};

export default LoadMoreButton;
