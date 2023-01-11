import React, { useState } from "react";

const SearchBar = () => {
    
    const [searchInput,setSearchInput] = useState("");
    
    const handleChange = (e) => {
        setSearchInput(e.tarjet.value);   
    };

    const handleClick = () => {
        console.log(searchInput);
    };

    return (
    <div style={{padding: "20px"}}>
        <input 
        type="" 
        placeholder="Search" 
        value={searchInput} 
        onChange={handleChange}            
        />
        <button onClick={handleClick}>Search</button>
    </div>
    );
};

export default SearchBar;

 