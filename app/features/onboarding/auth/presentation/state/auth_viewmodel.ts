import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User } from '@supabase/supabase-js';
import container from '../../../../../core/di/container';
import { LoginModel } from '../../domain/auth';

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

// Initial State
const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

// Thunks for Async Actions
export const signIn = createAsyncThunk(
  'auth/signIn',
  async (login: LoginModel , { rejectWithValue }) => {
    try {
      const user = await container.authRepository.signIn(login);
      return user;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);

// export const signUp = createAsyncThunk(
//   'auth/signUp',
//   async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
//     try {
//       const user = await container.authRepository.signUp(email, password);
//       return user;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const signOut = createAsyncThunk('auth/signOut', async (_, { rejectWithValue }) => {
//   try {
//     await container.authRepository.signOut();
//     return null; // No user after sign out
//   } catch (error) {
//     return rejectWithValue(error.message);
//   }
// });

// Slice (Reducers)
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {}, // We can add sync actions later
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
    //   .addCase(signUp.pending, (state) => {
    //     state.loading = true;
    //     state.error = null;
    //   })
    //   .addCase(signUp.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.user = action.payload;
    //   })
    //   .addCase(signUp.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload as string;
    //   })
    //   .addCase(signOut.fulfilled, (state) => {
    //     state.user = null;
    //   });
  },
});

export default authSlice.reducer;
