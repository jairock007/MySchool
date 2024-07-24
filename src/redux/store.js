import { configureStore } from '@reduxjs/toolkit';
import schoolReducer from './schoolSlice';

export const store = configureStore({
  reducer: {
    school: schoolReducer,
  },
});