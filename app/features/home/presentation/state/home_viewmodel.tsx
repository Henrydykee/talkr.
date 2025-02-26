import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import { Talkr } from "../../domain/home";
import container from "../../../../core/di/container";

interface HomeState {
    talkr : Talkr[] | null,
    loading : boolean,
    error : string | null
}

const initialState : HomeState = {
    talkr : null,
    loading : false,
    error : null
}

export const getPost = createAsyncThunk(
    'home/getPost',
    async(_,{rejectWithValue})=>{
        try {
            const talkr = await container.homerepository.GetPost();
            return talkr;
        } catch (error) {
            if(error instanceof Error){
                return rejectWithValue(error.message);
            }else{
                return rejectWithValue('An unknown error occurred');
            }
            
        }
    }
);

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
       .addCase(getPost.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
       .addCase(getPost.fulfilled, (state, action) => {
            state.talkr = action.payload;
            state.loading = false;
        })
       .addCase(getPost.rejected, (state, action) => {
            //state.error = action.payload;
            state.loading = false;
        })
    }
});

export default homeSlice.reducer;