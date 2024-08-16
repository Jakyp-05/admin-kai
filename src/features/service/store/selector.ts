import { RootState } from 'app/store';

export const selectService = (state: RootState) => state.service.services;
