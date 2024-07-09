import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3500",
});

export const getWords = async () => {
  const response = await api.get("/words");
  return response.data;
};
