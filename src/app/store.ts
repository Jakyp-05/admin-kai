// src/app/store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// Импортируем редьюсеры
import loginSlice from 'features/auth/login/store/slice';
import serviceSlice from 'features/service/store/slice'; // Импортируем новый редьюсер

const rootReducer = combineReducers({
  login: loginSlice,
  service: serviceSlice, // Добавляем новый редьюсер
});

export const store = configureStore({
  reducer: rootReducer,
});

// Типы
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
