import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("user/fetchUser", async()=>{
    const response = await axios.get("https://randomuser.me/api/");
    return response.data.results[0];
    
})



const userSlice = createSlice({
    name:"user",
    initialState:{data: null, loading:false,error:null},
    reducers:{},
    extraReducers:(builder)=>{
        builder 
        .addCase(fetchUser.pending, (state)=>{
            state.loading = true;
        })
        .addCase(fetchUser.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(fetchUser.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message;
        });
    }
})

export default userSlice.reducer;