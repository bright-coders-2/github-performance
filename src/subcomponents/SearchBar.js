//import { faChurch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React, { useState } from "react";
//import { Button } from "reactstrap";
import Results from "./Results";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [repos, setRepos] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClick = async () => {
    console.log(searchInput);

    try {
      const result = await axios(`https://api.github.com/users/${searchInput}/repos`);
      setRepos(result);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(repos);
  return (
    <>
      <div style={{ padding: "20px" }}>
        <input
        name="buscador"
          type="text"
          placeholder="search"
          value={searchInput}
          onChange={handleChange}
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></input>
        &nbsp; &nbsp;
        <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Search</button>
      </div>
      <Results repos={repos}></Results>
    </>
  );
};

export default SearchBar;
