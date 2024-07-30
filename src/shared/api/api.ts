import axios from "axios";

const apiRoot = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiRoot;
