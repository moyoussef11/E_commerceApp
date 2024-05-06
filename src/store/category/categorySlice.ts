import { createSlice } from "@reduxjs/toolkit";
import actGetCategory from "./actGetCategory";


interface ICategory {
    records: { id: number; title: string; prefix: string; img: string }[],
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error: string | null
}

const initialState: ICategory = {
    records: [],
    loading: 'idle',
    error: null,
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(actGetCategory.pending, (state) => {
            state.loading = 'pending',
                state.error = null
        });
        builder.addCase(actGetCategory.fulfilled, (state, action) => {
            state.loading = 'succeeded',
                state.records = action.payload;
        });
        builder.addCase(actGetCategory.rejected, (state, action) => {
            state.loading = 'failed',
                state.error = action.payload as string;
        });
    }
})
export { actGetCategory };
export default categorySlice.reducer;