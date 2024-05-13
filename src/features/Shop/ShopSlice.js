import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
    name: "shop",
    initialState: {
        value: {
            categorySelected: "",
            itemSelected: "",
        }
    },
    reducers: {
        setSelectedCategory: (state, action) => {
            state.value.categorySelected = action.payload;
        },
        setSelectedItem: (state, action) => {
            state.value.itemSelected = action.payload;
        }
    }
});

export const { setSelectedCategory, setSelectedItem } = shopSlice.actions;
export default shopSlice.reducer;
