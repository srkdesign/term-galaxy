import { useState } from "react";
import { Button } from "@nextui-org/react";

import BookmarkOutline from "../assets/icons/bookmark.svg";
import BookmarkFilled from "../assets/icons/bookmark-filled.svg";

const SaveButton = () => {
  const [isSaved, setIsSaved] = useState(false);

  const handleClick = () => {
    if (isSaved) {
      setIsSaved(false);
    } else {
      setIsSaved(true);
    }
    console.log("click");
  };

  return (
    <Button onClick={handleClick} size="md" variant="flat" isIconOnly>
      {isSaved ? (
        <img src={BookmarkFilled} alt="" />
      ) : (
        <img src={BookmarkOutline} alt="" />
      )}
    </Button>
  );
};

export default SaveButton;
