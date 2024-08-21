import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000",
});

export const getWords = async () => {
  const response = await api.get("/api");
  return response.data.words;
};
