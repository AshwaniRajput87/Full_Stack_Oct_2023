// create the slice

import { createSlice } from "@reduxjs/toolkit";
const UserSlice = createSlice({
    name: 'userSlice',
    initialState: {
      data: null,
      error: null,
      isLoading: false
    },
    reducers: {
      fetchDataStart: (state) =>{
        state.isLoading = true;
      },
      fetchDataSuccess: (state, val) => {
        state.isLoading = false;
        state.data = val
      },
      fetchDataFailure: (state,err) => {
        state.isLoading = false;
        state.error = err
      }
    }
})

export default UserSlice;