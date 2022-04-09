import { FaSearch } from 'react-icons/fa';
import { IconButton, SearchBox, SearchInput } from 'styles';

const SearchBar = () => (
  <SearchBox display="flex">
    <form>
      <SearchInput placeholder="Search..." />
      <IconButton type="submit">
        <FaSearch />
      </IconButton>
    </form>
  </SearchBox>
);

export default SearchBar;
