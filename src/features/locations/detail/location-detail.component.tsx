import { FC } from 'react';
import { useGetLocationQuery } from 'features/locations/locations.endpoints';
import CharactersComponent from 'features/characters/characters.component';

export type LocationDetailComponentProps = {
  id: number;
};

const LocationDetailComponent: FC<LocationDetailComponentProps> = ({
  id
}: LocationDetailComponentProps) => {
  const { data: location, error, isLoading } = useGetLocationQuery({ id });

  if (isLoading) return <div>Loading location...</div>;
  if (error || !location) return <div>Error when loading. Please try again later.</div>;

  const characterIds = location.residents.map((resident) =>
    parseInt(resident.split('character')[1].replace('/', ''), 10)
  );

  return (
    <div>
      <h2>
        #{location.id} - {location.name}
      </h2>
      <h4>{location.dimension}</h4>
      <CharactersComponent ids={characterIds} />
    </div>
  );
};

export default LocationDetailComponent;
