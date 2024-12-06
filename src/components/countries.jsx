import Search from "./search";
import Card from "./card";
import { useState, useEffect } from "react";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSearch, setFilteredSearch] = useState([]);

  const API_ENDPOINT = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    fetch(API_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setFilteredSearch(data);
        console.log(data);
      })
      .catch((error) => console.error("error fetching Data", error));
  }, []);

  // Filter countries based on the search query
  useEffect(() => {
    const query = searchQuery.toLowerCase();
    if (query === "") {
      setFilteredSearch(countries);
    } else {
      const filtered = countries.filter(({ name }) =>
        name.common.toLowerCase().includes(query)
      );
      setFilteredSearch(filtered);
    }
  }, [searchQuery,countries]);

  return (
    <>
      <div style={{ marginTop: "5px" }}>
        <Search setSearchQuery={setSearchQuery} />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "15px",
          margin: "10px",
        }}
      >
        {filteredSearch.map(({ name, flags, cca3 }) => (
          <Card key={cca3} flag={flags.png} name={name.common} />
        ))}
      </div>
    </>
  );
};
export default Countries;
