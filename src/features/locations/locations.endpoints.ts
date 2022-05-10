import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LocationsResult } from 'features/locations';

export const locationsApi = createApi({
  reducerPath: 'locationsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/location/'
  }),
  endpoints: (builder) => ({
    getLocations: builder.query<LocationsResult, string>({
      query: (name) => (name ? `?name=${name}` : '')
    })
  })
});

export const { useGetLocationsQuery } = locationsApi;
