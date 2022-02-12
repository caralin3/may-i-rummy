import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SettingsState {
  numBots: number;
  numPlayers: number;
}

const initialState: SettingsState = {
  numBots: 2,
  numPlayers: 1,
};

export const SettingsSlice = createSlice({
  name: 'Settings',
  initialState,
  reducers: {
    setNumBots: (state, action: PayloadAction<number>) => {
      state.numBots = action.payload;
    },
    setNumPlayers: (state, action: PayloadAction<number>) => {
      state.numPlayers = action.payload;
    },
  },
});

export const { setNumBots, setNumPlayers } = SettingsSlice.actions;

export default SettingsSlice.reducer;
