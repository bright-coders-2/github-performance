import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleStop } from "@fortawesome/free-solid-svg-icons";
import r from "../img/user.png";
import '../css/App.css';
import SearchBar from "../subcomponents/SearchBar";
import {Table} from 'reactstrap'
import ReposTable from "../subcomponents/ReposTable";


export function Repositories() {
  const { logout, user } = useAuth();
  console.log(user);
  const navigate = useNavigate();
  const handleLogout = async () => {
    navigate("/Login");
  };

  return (
    <div className="fondomenu">
      <div className="containeruser">
        <div className="flex items-center justify-between">
          <Navbar bg="light" variant="light">
            <Container>
              <img src={r}></img>
              <h6>
                Welcome : &nbsp; &nbsp;&nbsp; &nbsp;
                <button
                    className="btnlogout text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={handleLogout}>
                    <h6>Logout</h6>
                  </button>
                <p></p>
                <p>{user.displayName || user.email}</p>
                <p>
                  <FontAwesomeIcon icon={faCircleStop}></FontAwesomeIcon> Active
                </p>
              </h6>
              <div className="btnlogout">
              </div>
            </Container>
          </Navbar>
          <h1>Repo Search</h1>
          <SearchBar/>
          <div>
          <Table>
            <thead><tr><th>Id</th>
            <th>Nombre</th>
            <th>Accciones</th></tr></thead>
          </Table>
          </div>
          
        </div>
      </div>
    </div>
  );
}