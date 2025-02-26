
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../features/onboarding/auth/presentation/state/auth_viewmodel';
import homeReducer from '../../features/home/presentation/state/home_viewmodel';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    home : homeReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
