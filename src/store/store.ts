import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {}
});

// Infiere los tipos del `RootState` y `AppDispatch` de la store
export type RootState = ReturnType<typeof store.getState>;
// Tipo inferido: {pokemon: PokemonState}
export type AppDispatch = typeof store.dispatch;

// Usa los siguientes hooks en la app en vez de los `useDispatch` y `useSelector` planos de Redux
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
