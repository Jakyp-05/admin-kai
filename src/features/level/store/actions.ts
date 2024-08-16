import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiLevel } from "../api";
import { LevelObject } from "../type";

export const getAllLevels = createAsyncThunk<LevelObject[], void, { rejectValue: string }>(
  "levels/getAllLevels",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiLevel.getAllLevels();
      return response.data;
    } catch (error: any) {
      const message = error.response?.data?.message || "Unknown error";
      return rejectWithValue(message);
    }
  }
);