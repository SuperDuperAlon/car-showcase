"use client";

import { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";

function SearchBar() {
  const [manufacturer, setManufacturer] = useState("");

  const handleSearch = () => {
    // preventDefault()
    console.log("submut");
  };

  return (
    <form className="searchBar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer 
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
}

export default SearchBar;
