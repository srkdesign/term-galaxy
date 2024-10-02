import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Spinner } from "@nextui-org/spinner";

const Loading = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className={`flex items-center justify-center w-full h-full ${isDark ? 'dark' : 'light'} bg-background`}>
      <Spinner label="Loading..." color="default" />
    </div>
  );
}

export default Loading;