import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { postService, getAllServices } from "./actions";
import { ServiceRes } from "../type";

interface ServiceState {
  status: "idle" | "loading" | "succeeded" | "failed";
  services: ServiceRes[]; // Используем ServiceRes[] для хранения списка услуг
  message?: string;
}

const initialState: ServiceState = {
  status: "idle",
  services: [],
  message: "",
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postService.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postService.fulfilled, (state, action: PayloadAction<ServiceRes>) => {
        state.status = "succeeded";
        // Здесь можно добавить новую услугу в массив services, если необходимо
      })
      .addCase(postService.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.error.message; // Обратите внимание на использование action.error.message
      })
      .addCase(getAllServices.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllServices.fulfilled, (state, action: PayloadAction<ServiceRes[]>) => {
        state.status = "succeeded";
        state.services = action.payload; // Полученные данные сохраняются в services
      })
      .addCase(getAllServices.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.error.message; // Используем action.error.message
      });
  },
});

export default serviceSlice.reducer;