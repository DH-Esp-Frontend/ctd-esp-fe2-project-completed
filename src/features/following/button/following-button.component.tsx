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
  const alt = isFav ? 'is_favorite' : 'is_not_favorite';

  return (
    <FollowingButton onClick={() => onToggleFavorite(!isFav)}>
      <img src={src} alt={alt} />
    </FollowingButton>
  );
};

export default FollowingButtonComponent;
