import { useGetCharacterByIdQuery } from 'services/character.services';

const CardPicture = () => {
  const { data } = useGetCharacterByIdQuery('1');
  console.log(data);
  return (
    <div>
      <img src={data?.image} />
    </div>
  );
};
export default CardPicture;
