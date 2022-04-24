import { FaSearch } from 'react-icons/fa';
import { IconButton } from '../styles';
import SearchBox from './search-box.styles';
import SearchInput from './search-input.styles';

const SearchBar = () => (
  <SearchBox aria-label="form">
    <SearchInput aria-label="input" placeholder="Search..." />
    <IconButton type="submit">
      <FaSearch />
    </IconButton>
  </SearchBox>
);

export default SearchBar;
