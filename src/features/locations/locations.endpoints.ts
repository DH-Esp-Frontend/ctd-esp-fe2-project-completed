import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LocationsResult } from 'features/locations';

type GetLocationsProps = {
  name: string;
  page: number;
};

export const locationsApi = createApi({
  reducerPath: 'locationsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/location/'
  }),
  endpoints: (builder) => ({
    getLocations: builder.query<LocationsResult, GetLocationsProps>({
      query: ({ name, page }) => `?name=${name}&page=${page}`
    })
  })
});

export const { useGetLocationsQuery } = locationsApi;
