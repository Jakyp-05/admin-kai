import axios from "axios";

export const apiRoot = axios.create({
  baseURL: "http://ec2-3-123-153-116.eu-central-1.compute.amazonaws.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const addAuthHeader = (token: string) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
