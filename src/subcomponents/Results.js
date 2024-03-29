import React from "react";
//import { Children } from "react";

const Results = (props) => {
  const { repos } = props;
  console.log("Repos is: ", repos.data);

  const listRepos =
    repos.length !== 0 ? (
      repos.data.map((item) => (
        <li key={item.id}>
          <a href={item.html_url}>{item.name} </a>
        </li>
      ))
    ) : (
      <li>No repos found</li>
    
    );

  return <ul>{listRepos}</ul>;
};

export default Results;
