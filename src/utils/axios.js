import axois from "axios";
import { getUserFromLocalStorage } from "./localStorage";

const customFetch = axois.create({
  baseURL: "https://redux-toolkit-jobster-api-server.onrender.com/api/v1",
});
customFetch.interceptors.request.use((config) => {
  const user = getUserFromLocalStorage();
  if (user) {
    config.headers["Authorization"] = `Bearer ${user.token}`;
  }

  return config;
});

export default customFetch;
