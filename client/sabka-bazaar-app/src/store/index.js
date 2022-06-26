import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist';

import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  devTools: process.env.NODE_ENV !== 'production',
  middleware: []
});
