import { createContext, ReactNode, useState } from "react";

type ThemeContextProviderProps = {
  children: ReactNode;
};

type ThemeContextProvider = {
  isDark: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext({} as ThemeContextProvider);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const getSavedTheme = () => {
    const savedTheme = localStorage.getItem("isDark");
    if (savedTheme == null) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return JSON.parse(savedTheme);
  };

  const [isDark, setIsDark] = useState<boolean>(getSavedTheme);

  const toggleTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem("isDark", JSON.stringify(!isDark));
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
