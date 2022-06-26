import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  showCartModal: null,
  items: null,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    showCartModal: (state, action) => {
      state.showCartModal = action?.payload;
    },
  },
});

export const { showCartModal } = cartSlice.actions;

export default cartSlice.reducer;
