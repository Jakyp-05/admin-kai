import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LevelObject } from "../type";
import {getAllLevels} from "./actions"

interface LevelState {
  status: "idle" | "loading" | "succeeded" | "failed";
  levels: LevelObject[];
  message?: string;
}

const initialState: LevelState = {
  status: "idle",
  levels: [],
  message: "",
};

const levelSlice = createSlice({
  name: "level",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllLevels.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllLevels.fulfilled, (state, action: PayloadAction<LevelObject[]>) => {
        state.status = "succeeded";
        state.levels = action.payload;
      })
      .addCase(getAllLevels.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload as string;
      })
  },
});
export default levelSlice.reducer;