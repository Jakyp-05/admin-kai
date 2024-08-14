import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import loginSlice from 'features/auth/login/store/slice';
import serviceSlice from 'features/service/store/slice';
import levelSlice from 'features/level/store/slice'

const rootReducer = combineReducers({
  login: loginSlice,
  service: serviceSlice,
  level: levelSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
