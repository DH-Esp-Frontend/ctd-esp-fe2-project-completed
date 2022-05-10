import { FC } from 'react';
import { LocationsTable } from 'features/locations/table';
import { useGetLocationsQuery } from 'features/locations/locations.endpoints';
import { useAppSelector } from 'store/hooks';

const LocationsComponent: FC = () => {
  const locationsQuery = useAppSelector((state) => state.locations.query);
  const { data: locations, error, isLoading } = useGetLocationsQuery(locationsQuery);

  if (isLoading) return <div>Cargando ubicaciones interplanetarias...</div>;
  if (error || !locations || locations.results.length === 0)
    return <div>Error al cargar. Intente nuevamente mas tarde.</div>;
  return (
    <div>
      <LocationsTable locations={locations.results} />
    </div>
  );
};

export default LocationsComponent;
