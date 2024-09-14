export const getLocale = () => {
  return localStorage.getItem("language")?.split("-")[0];
};

export const getYear = () => {
  return new Date().getFullYear().toString();
};
