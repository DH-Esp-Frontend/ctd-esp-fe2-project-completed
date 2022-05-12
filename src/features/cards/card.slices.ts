import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICharacters } from './card.types';

export type CharactersState = {
  favs: ICharacters[];
};

const initialState: CharactersState = {
  favs: []
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    addFav: (state, action: PayloadAction<ICharacters>) => {
      state.favs.push(action.payload);
    },
    deleteFav: (state, action: PayloadAction<string>) => {
      const filterFavs = state.favs.filter((character) => character.id !== action.payload);
      state.favs = filterFavs;
    }
  }
});
export const { addFav, deleteFav } = charactersSlice.actions;

export default charactersSlice.reducer;
