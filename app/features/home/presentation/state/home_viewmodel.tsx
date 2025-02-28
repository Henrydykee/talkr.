import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Talkr } from "../../domain/home";
import container from "../../../../core/di/container";

interface HomeState {
    talkrList: Talkr[] | null;
    talkrListLoading: boolean;
    talkrListError: string | null;
    // Create Talkr variables
    talkr: Talkr | null;
    createTalkrLoading: boolean;
    createTalkrError: string | null;
}

const initialState: HomeState = {
    talkrList: null,
    talkrListLoading: false,
    talkrListError: null,
    // Create Talkr variables
    talkr: null,
    createTalkrLoading: false,
    createTalkrError: null,
};

// Fetch posts
export const getPost = createAsyncThunk<Talkr[], void, { rejectValue: string }>(
    'home/getPost',
    async (_, { rejectWithValue }) => {
        try {
            const talkr = await container.homerepository.getPost();
            return talkr;
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue("An unknown error occurred");
            }
        }
    }
);

// Create a new post
export const createPost = createAsyncThunk<Talkr, Talkr, { rejectValue: string }>(
    'home/createPost',
    async (talkr, { rejectWithValue }) => {
        try {
            const t = await container.homerepository.createPost(talkr);
            return t;
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue("An unknown error occurred");
            }
        }
    }
);

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPost.pending, (state) => {
                state.talkrListLoading = true;
                state.talkrListError = null;
            })
            .addCase(getPost.fulfilled, (state, action) => {
                state.talkrList = action.payload;
                state.talkrListLoading = false;
            })
            .addCase(getPost.rejected, (state, action) => {
                state.talkrListError = action.payload as string;
                state.talkrListLoading = false;
            })
            .addCase(createPost.pending, (state) => {
                state.createTalkrLoading = true;
                state.createTalkrError = null;
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.talkr = action.payload;
                state.createTalkrLoading = false; // ✅ Fix: Ensure loading is stopped
                state.createTalkrError = null;
            })
            .addCase(createPost.rejected, (state, action) => {
                state.createTalkrError = action.payload as string;
                state.createTalkrLoading = false;
            });
    },
});

export default homeSlice.reducer;
