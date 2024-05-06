import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



type TCat = { id: number; title: string; prefix: string; img: string }[];

const actGetCategory = createAsyncThunk(
  "category/actGetCategory",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await axios.get<TCat>("http://localhost:3000/categories");
      return res.data;
    } catch (error) {
      return rejectWithValue("An unexpected error");
    }
  }
);

export default actGetCategory;
