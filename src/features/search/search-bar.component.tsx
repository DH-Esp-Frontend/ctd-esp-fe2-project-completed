import { FaSearch } from 'react-icons/fa';
import { IconButton } from '../styles';
import SearchBox from './search-box.styles';
import SearchInput from './search-input.styles';
import { ChangeEvent, FC } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { searchLocations } from 'features/locations/locations.slices';
import { useNavigate } from 'react-router-dom';

const SearchBar: FC = () => {
  const locationsQuery = useAppSelector((state) => state.locations.query);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(searchLocations(e.target.value));
    navigate('/');
  };

  return (
    <SearchBox aria-label="form" onSubmit={(e) => e.preventDefault()}>
      <SearchInput
        aria-label="input"
        placeholder="Search..."
        value={locationsQuery}
        onChange={onSearch}
      />
      <IconButton type="button">
        <FaSearch />
      </IconButton>
    </SearchBox>
  );
};

export default SearchBar;
