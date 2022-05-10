import { rest } from 'msw';
import locationDataJson from 'test/mocks/locations/locations.mocks';
const baseUrl = 'https://rickandmortyapi.com';

const handlers = [
  // Product
  rest.get(`${baseUrl}/api/location/`, async (req, res, ctx) => res(ctx.json(locationDataJson)))
];
export default handlers;
