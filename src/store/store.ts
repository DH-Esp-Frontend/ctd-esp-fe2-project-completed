import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { charactersApi, charactersReducer } from 'features/cards';
import { locationReducer, locationsApi } from 'features/locations';

const rootReducer = combineReducers({
  [locationsApi.reducerPath]: locationsApi.reducer,
  [charactersApi.reducerPath]: charactersApi.reducer,
  //
  locations: locationReducer,
  characters: charactersReducer
});

export const store = configureStore({
  reducer: rootReducer,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(locationsApi.middleware)
});

// Infiere los tipos del `RootState` y `AppDispatch` de la store
export type RootState = ReturnType<typeof store.getState>;
// Tipo inferido: {pokemon: PokemonState}
export type AppDispatch = typeof store.dispatch;
