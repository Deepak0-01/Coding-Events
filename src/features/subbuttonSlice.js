import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  subbutton: "Upcoming",
  
};



export const subbuttonSlice = createSlice({
  name: 'subbutton',
  initialState,
 
  reducers: {
   
    currBtn: (state, action) => {
      state.subbutton = action.payload.btn;
    },

   
  },
 
 
});

export const { currBtn } = subbuttonSlice.actions;


export const selectSubbutton = (state) => state.subbutton.subbutton;


export default subbuttonSlice.reducer;
