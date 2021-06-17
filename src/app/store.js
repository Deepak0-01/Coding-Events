import { configureStore } from '@reduxjs/toolkit';
import usertagsReducer from '../features//usertagsSlice';
import subbuttonSlice from '../features/subbuttonSlice';
import eventbuttonSlice from '../features/eventbuttonSlice';

export const store = configureStore({
  reducer: {
   usertags: usertagsReducer,
   subbutton:subbuttonSlice,
   eventbutton:eventbuttonSlice
  },
});
