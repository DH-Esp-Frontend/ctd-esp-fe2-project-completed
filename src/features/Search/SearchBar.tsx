import { FaSearch } from 'react-icons/fa';
import { IconButton } from '../styles';
import SearchBox from './search-box.styles';
import SearchInput from './search-input.styles';

const SearchBar = () => (
  <SearchBox>
    <SearchInput placeholder="Search..." />
    <IconButton type="submit">
      <FaSearch />
    </IconButton>
  </SearchBox>
);

export default SearchBar;
