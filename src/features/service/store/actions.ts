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
      const message = error.response?.data?.message || 'Unknown error';
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
      const message = error.response?.data?.message || "Unknown error";
      return rejectWithValue(message);
    }
  }
);

export const getService = createAsyncThunk<ServiceRes, { id: number }, { rejectValue: string }>(
  "services/getService",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await apiService.getService(id);
      return response.data;
    } catch (error: any) {
      const message = error.response?.data?.message || "Unknown error";
      return rejectWithValue(message);
    }
  }
);

export const deleteService = createAsyncThunk<void, { id: number }, { rejectValue: string }>(
  'services/deleteService',
  async ({ id }, { rejectWithValue }) => {
    try {
      await apiService.deleteService(id);
    } catch (error: any) {
      const message = error.response?.data?.message || "Unknown error";
      return rejectWithValue(message);
    }
  }
);


export const editService = createAsyncThunk<ServiceRes, { id: number, service: ServiceReq }, { rejectValue: string }>(
  'services/editService',
  async ({ id, service }, { rejectWithValue }) => {
    try {
      const response = await apiService.editService(id, service);
      return response.data;
    } catch (error: any) {
      const message = error.response?.data?.message || 'Unknown error';
      return rejectWithValue(message);
    }
  }
);