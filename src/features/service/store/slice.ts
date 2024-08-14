import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { postService, getAllServices, getService, deleteService, editService } from "./actions";
import { ServiceRes } from "../type";

interface ServiceState {
  status: "idle" | "loading" | "succeeded" | "failed";
  services: ServiceRes[];
  selectedService?: ServiceRes;
  message?: string;
}

const initialState: ServiceState = {
  status: "idle",
  services: [],
  selectedService: undefined,
  message: "",
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    resetSelectedService(state) {
      state.selectedService = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postService.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postService.fulfilled, (state, action: PayloadAction<ServiceRes>) => {
        state.status = "succeeded";
      })
      .addCase(postService.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload as string;
      })
      .addCase(getAllServices.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllServices.fulfilled, (state, action: PayloadAction<ServiceRes[]>) => {
        state.status = "succeeded";
        state.services = action.payload;
      })
      .addCase(getAllServices.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload as string;
      })
      .addCase(getService.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getService.fulfilled, (state, action: PayloadAction<ServiceRes>) => {
        state.status = "succeeded";
        state.selectedService = action.payload;
      })
      .addCase(getService.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload as string;
      })
      .addCase(deleteService.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteService.fulfilled, (state, action) => {
        state.status = "succeeded";
        const id = action.meta.arg.id;
        state.services = state.services.filter(service => service.id !== id);
      })
      .addCase(deleteService.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload as string;
      })
      .addCase(editService.pending, (state) => {
        state.status = "loading";
      })
      .addCase(editService.fulfilled, (state, action: PayloadAction<ServiceRes>) => {
        state.status = "succeeded";
        const index = state.services.findIndex(service => service.id === action.payload.id);
        if (index !== -1) {
          state.services[index] = action.payload;
        }
      })
      .addCase(editService.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload as string;
      });
  },
});

export const { resetSelectedService } = serviceSlice.actions;
export default serviceSlice.reducer;