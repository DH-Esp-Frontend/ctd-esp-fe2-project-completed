import { rest } from 'msw';
import {
  locationDataPage1Json,
  locationDataPage2Json,
  locationDataPage3Json
} from 'test/mocks/locations/locations.mocks';
const baseUrl = 'https://rickandmortyapi.com';

const handlers = [
  // Product
  rest.get(`${baseUrl}/api/location/`, async (req, res, ctx) => {
    if (req.url.searchParams.get('page') === '1') {
      return res(ctx.json(locationDataPage1Json));
    } else if (req.url.searchParams.get('page') === '2') {
      return res(ctx.json(locationDataPage2Json));
    } else if (req.url.searchParams.get('page') === '3') {
      return res(ctx.json(locationDataPage3Json));
    }
    return res(ctx.json([]));
  })
];
export default handlers;
