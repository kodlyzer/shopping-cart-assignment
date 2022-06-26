import { combineReducers } from 'redux';
import authReducer from './authSlice';
import cartReducer from './cartSlice';

const reducers = combineReducers({
  auth: authReducer,
  cart: cartReducer
});

export default reducers
