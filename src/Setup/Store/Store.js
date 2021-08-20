import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../../Common/BaseReduxApp/Counter/CounterSlice';

export const Store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});