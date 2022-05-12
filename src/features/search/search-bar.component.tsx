import { FaSearch } from 'react-icons/fa';
import { IconButton } from '../styles';
import SearchBox from './search-box.styles';
import SearchInput from './search-input.styles';
import { ChangeEvent, FC } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { searchLocations } from 'features/locations/locations.slices';

const SearchBar: FC = () => {
  const locationsQuery = useAppSelector((state) => state.locations.query);
  const dispatch = useAppDispatch();

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(searchLocations(e.target.value));
  };

  return (
    <SearchBox aria-label="form">
      <SearchInput
        aria-label="input"
        placeholder="Search..."
        value={locationsQuery}
        onChange={onSearch}
      />
      <IconButton type="submit">
        <FaSearch />
      </IconButton>
    </SearchBox>
  );
};

export default SearchBar;
