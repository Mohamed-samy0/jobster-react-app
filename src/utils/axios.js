import axois from "axios";

const customFetch = axois.create({
  baseURL: "https://redux-toolkit-jobster-api-server.onrender.com/api/v1",
});

export default customFetch;
