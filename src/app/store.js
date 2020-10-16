import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../features/counter/UserSlice';

export default configureStore({
  reducer: {
    counter: UserReducer,
  },
});
