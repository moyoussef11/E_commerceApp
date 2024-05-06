import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actProductSlice = createAsyncThunk('product/actProductSlice', async (prefix:string) => {
    try {
        const res = await axios.get(`http://localhost:3000/products?cat_prefix=${prefix}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }

})

export default actProductSlice;

