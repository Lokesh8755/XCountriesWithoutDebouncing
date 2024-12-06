import "../styles/Search.css";
import PropTypes from "prop-types";

const Search = ({setSearchQuery}) => {
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <input
      type="text"
      className="search-input"
      placeholder="Search for countries..."
      onChange={handleInputChange}
    />
  );
};

Search.propTypes = {
    setSearchQuery: PropTypes.func.isRequired,
}

export default Search;
