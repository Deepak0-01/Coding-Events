import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  usertags: [],
  
};



export const usertagsSlice = createSlice({
  name: 'usertags',
  initialState,
 
  reducers: {
   
    addTags: (state, action) => {
     
      const val = action.payload;
      console.log(val.newtag);

      const index = state.usertags.indexOf(val.newtag.toString());

     
   
      if(index===-1)
      {

      return {
        ...state,
        usertags:[...state.usertags,action.payload.newtag]
      }
       

      

      }

      let newusertags = [...state.usertags];

      newusertags.splice(index,1);

     
         
      return{
        ...state,
        usertags:newusertags

       }
         

    },

   
  },
 
 
});

export const { addTags, removeTags } = usertagsSlice.actions;


export const selectUsertags = (state) => state.usertags.usertags;


export default usertagsSlice.reducer;
