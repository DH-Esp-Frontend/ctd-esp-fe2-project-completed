import { residentsList, IDs } from 'features/cards';

//metodo para separar los id correspondientes a la url de cada personaje
export const filterIDs = (residents: residentsList): IDs => {
  const cutIds = residents.map((resident) => resident.slice(42));
  return cutIds;
};
