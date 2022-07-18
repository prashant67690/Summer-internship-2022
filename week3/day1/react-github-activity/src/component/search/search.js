import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { options, API_URL } from "../../api";

const Search = (onSearchChange) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    console.log("entered");
    return fetch(`${API_URL}/${inputValue}/events`, options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for the github username"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
