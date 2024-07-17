import { createContext, ReactNode, useEffect, useState } from "react";

type ThemeContextProviderProps = {
  children: ReactNode;
};

type ThemeContextProvider = {
  isDark: Boolean;
  toggleTheme: any;
};

export const ThemeContext = createContext({} as ThemeContextProvider);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem("isDark", JSON.stringify(!isDark));
  };

  const currentTheme = localStorage.getItem("isDark") || "false";

  useEffect(() => {
    setIsDark(currentTheme === "true");
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
