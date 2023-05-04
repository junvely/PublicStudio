import axios from "axios";

export const AxiosAuth = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});
