import { createSlice } from "@reduxjs/toolkit";
import actProductSlice from "./actProductSlice";

interface IProduct {
    records: { id: number, title: string, price: number, cat_prefix: string, img: string }[],
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error: string | null
}


const initialState: IProduct = {
    records: [],
    loading: 'idle',
    error: null
}


const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(actProductSlice.pending, (state) => {
            state.loading = "pending";
        })
        builder.addCase(actProductSlice.fulfilled, (state, action) => {
            state.records = action.payload;
            state.loading = "succeeded";
        })
        builder.addCase(actProductSlice.rejected, (state) => {
            state.loading = "failed";
            state.error = "an expected error";
        })
    }
})

export { actProductSlice };
export default productSlice.reducer;