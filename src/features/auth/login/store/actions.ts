import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiLogin } from "../api";
import { LoginReq } from "../type";
import { NavigateFunction } from "react-router-dom";

export const login = createAsyncThunk(
  "auth/login",
  async (
    { user, navigate }: { user: LoginReq; navigate: NavigateFunction },
    { rejectWithValue }
  ) => {
    try {
      const response = await apiLogin.login(user);
      console.log("Login response:", response.data);
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/");
        return response.data;
      } else {
        throw new Error("Token not found in response");
      }
    } catch (e: any) {
      return rejectWithValue(e.response.data.detail);
    }
  }
);
