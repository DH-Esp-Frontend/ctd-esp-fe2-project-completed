import { FaSearch } from 'react-icons/fa';
import { IconButton, SearchBox, SearchInput } from 'styles';

const SearchBar = () => (
  <SearchBox>
    <SearchInput placeholder="Search..." />
    <IconButton type="submit">
      <FaSearch />
    </IconButton>
  </SearchBox>
);

export default SearchBar;
