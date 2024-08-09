import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../api";
import { ServiceReq, ServiceRes } from "../type";

export const postService = createAsyncThunk<ServiceRes, { service: ServiceReq }, { rejectValue: string }>(
  'services/postService',
  async ({ service }, { rejectWithValue }) => {
    try {
      const response = await apiService.postService(service);
      return response.data;
    } catch (error: any) {
      const message = error.response?.data?.detail || 'Unknown error';
      return rejectWithValue(message);
    }
  }
);

export const getAllServices = createAsyncThunk<ServiceRes[], void, { rejectValue: string }>(
  "services/getAllServices",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiService.getAllServices();
      return response.data;
    } catch (error: any) {
      const message = error.response?.data?.detail || "Unknown error";
      return rejectWithValue(message);
    }
  }
);