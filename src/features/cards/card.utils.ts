import { residents, IDs } from 'features/cards';

export const filterIDs = (residents: residents): IDs => {
  const cutIds = residents.map((resident) => resident.slice(42));
  return cutIds;
};
