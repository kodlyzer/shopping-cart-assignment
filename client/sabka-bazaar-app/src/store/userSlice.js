import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signInAuthUserWithEmailAndPassword } from '../utils/firebase.utils';

export const loginAsync = createAsyncThunk(
  'user/login',
  async ({ email, password }) => {
    const response = await signInAuthUserWithEmailAndPassword(email, password);
    return response?.user;
  }
);

export const signUpAsync = createAsyncThunk(
  'user/signup',
  async ({ email, password }) => {
    const user = await signInAuthUserWithEmailAndPassword(email, password);
    return user;
  }
);


const initialState = {
  value: 0,
  user: null,
  loading: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signUpStart: (state) => {},
    signUpEnd: (state) => {},
    signUpError: (state, action) => {},
    loginStart: (state, action) => {},
    loginEnd: (state, action) => {},
    loginError: (state, action) => {}
  },
  extraReducers: builder => {
    builder.addCase(loginAsync.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      state.user = action?.payload;
      state.loading = false;
    });
    builder.addCase(loginAsync.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
  },
})

export const { increment, decrement, incrementByAmount } = userSlice.actions

export default userSlice.reducer