import { RootState } from 'app/store';

export const selectLevel = (state: RootState) => state.level.levels;