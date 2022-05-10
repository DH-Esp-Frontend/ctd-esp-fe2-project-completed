import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type LocationsState = {
  query: string;
};

const initialState: LocationsState = {
  query: ''
};

const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    searchLocations: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    }
  }
});
export const { searchLocations } = locationsSlice.actions;

export default locationsSlice.reducer;
