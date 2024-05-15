import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    value: {
      categorySelected: "",
      itemSelected: "",
      headerText: "Tu Tienda", 
    }
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      state.value.categorySelected = action.payload;
      state.value.headerText = action.payload; 
    },
    setSelectedItem: (state, action) => {
      state.value.itemSelected = action.payload;
      state.value.headerText = action.payload?.title;     },
    setHeaderText: (state, action) => {
      state.value.headerText = action.payload; 
    },
  }
});

export const { setSelectedCategory, setSelectedItem, setHeaderText , } = shopSlice.actions;
export default shopSlice.reducer;

