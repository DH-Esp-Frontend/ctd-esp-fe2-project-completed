import { rest } from 'msw';
import {
  locationData1Json,
  locationDataPage1Json,
  locationDataPage2Json,
  locationDataPage3Json
} from 'test/mocks/locations/locations.mocks';
import {
  allCharactersPage1Json,
  character1Json,
  characterMultipleJson
} from 'test/mocks/characters/characters.mocks';
const baseUrl = 'https://rickandmortyapi.com';

const handlers = [
  // Location
  rest.get(`${baseUrl}/api/location/`, async (req, res, ctx) => {
    if (req.url.searchParams.get('page') === '1') {
      return res(ctx.json(locationDataPage1Json));
    } else if (req.url.searchParams.get('page') === '2') {
      return res(ctx.json(locationDataPage2Json));
    } else if (req.url.searchParams.get('page') === '3') {
      return res(ctx.json(locationDataPage3Json));
    }
    return res(ctx.json([]));
  }),
  rest.get(`${baseUrl}/api/location/1`, async (req, res, ctx) => res(ctx.json(locationData1Json))),
  // Characters
  rest.get(`${baseUrl}/api/character/`, async (req, res, ctx) =>
    res(ctx.json(allCharactersPage1Json))
  ),
  rest.get(`${baseUrl}/api/character/1`, async (req, res, ctx) => res(ctx.json(character1Json))),
  rest.get(`${baseUrl}/api/character/1,3`, async (req, res, ctx) =>
    res(ctx.json(characterMultipleJson))
  )
];
export default handlers;
