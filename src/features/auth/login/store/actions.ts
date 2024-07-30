import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiRoot } from "app/api";

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: { email: string; password: string }) => {
    try {
      const response = await apiRoot.post("api/login", credentials);
      const token = response.data.token;
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
