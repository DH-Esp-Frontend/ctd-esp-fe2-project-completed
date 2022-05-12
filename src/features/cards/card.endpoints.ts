import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CharacterResult, IDs } from 'features/cards';

export const charactersApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/character/'
  }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query<CharacterResult, IDs>({
      query: (IDs: IDs) => `${IDs}`
    })
  })
});

export const { useGetAllCharactersQuery } = charactersApi;
