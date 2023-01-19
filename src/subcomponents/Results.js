import React from "react";


const Results = (props) => {
  const { repos } = props;
  console.log("Repos is: ", repos.data);

  const listRepos =
    repos.length !== 0 ? (
      repos.data.map((item) => (
        <li key={item.id}>
          <a href={item.html_url}>{item.name} </a>
          <button className="btnlogout text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Añadir</button>
          
        </li>
      ))
    ) : (
      <li>No repos found</li>
    );

  return <ul>{listRepos}</ul>;
};

export default Results;
