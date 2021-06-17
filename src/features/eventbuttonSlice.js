import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  eventbutton: "All Events",
  
};



export const eventbuttonSlice = createSlice({
  name: 'eventbutton',
  initialState,
 
  reducers: {
   
    currEventBtn: (state, action) => {
      state.eventbutton = action.payload.btn;
    },

   
  },
 
 
});

export const { currEventBtn } = eventbuttonSlice.actions;


export const selectEventbutton = (state) => state.eventbutton.eventbutton;


export default eventbuttonSlice.reducer;
