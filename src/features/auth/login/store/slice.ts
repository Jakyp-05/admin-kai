import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { AuthState } from "../type";
import { login } from "./actions";
import { LoginRes } from "../type";

interface Login {
  status: "idle" | "loading" | "succeeded" | "failed";
  token: string;
  message?: string;
}

interface IInitialState {
  login: Login;
}

const initialState: IInitialState = {
  login: {
    status: "idle",
    token: localStorage.getItem("token") || "",
    message: "",
  },
};

const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.login.token = "";
      state.login.status = "idle";
      state.login.message = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.login.status = "loading";
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<LoginRes>) => {
        state.login.status = "succeeded";
        state.login.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.login.status = "failed";
        state.login.message = action.payload as string;
      });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
