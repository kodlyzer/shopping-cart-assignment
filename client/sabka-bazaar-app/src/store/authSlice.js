import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signInAuthUserWithEmailAndPassword, signoutUser } from '../utils/firebase.utils';

export const loginAsync = createAsyncThunk(
  'auth/login',
  async ({ email, password }) => {
    const response = await signInAuthUserWithEmailAndPassword(email, password);
    return response?.user;
  }
);

export const signUpAsync = createAsyncThunk(
  'auth/signup',
  async ({ email, password }) => {
    const user = await signInAuthUserWithEmailAndPassword(email, password);
    return user;
  }
);

export const signOutAsync = createAsyncThunk(
  'auth/signout',
  async () => {
    const user = await signoutUser();
    return user;
  }
);



const initialState = {
  value: 0,
  user: null,
  loading: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => { 
      state.user = action?.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(loginAsync.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      state.user = action?.payload;
      state.loading = false;
      console.log(state.user);
    });
    builder.addCase(loginAsync.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
    builder.addCase(signOutAsync.fulfilled, (state, action) => {
      state.user = null;
    });
    
  },
})

export const { setCurrentUser } = authSlice.actions

export default authSlice.reducer