import { FC } from 'react';
import FollowingButton from 'features/following/button/following-button.styles';

type FollowingButtonProps = {
  isFav: boolean;
  onToggleFavorite: (setFav: boolean) => void;
};

const FollowingButtonComponent: FC<FollowingButtonProps> = ({
  isFav,
  onToggleFavorite
}: FollowingButtonProps) => {
  const src = isFav ? '/images/star-filled.png' : '/images/star.png';

  return (
    <FollowingButton onClick={() => onToggleFavorite(!isFav)}>
      <img src={src} alt={'favorito'} />
    </FollowingButton>
  );
};

export default FollowingButtonComponent;
