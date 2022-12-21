import { useAuth } from "../context/authContext";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleStop } from "@fortawesome/free-solid-svg-icons";
import r from "../img/user.png";
import re from "../img/repositories.png";
import ref from "../img/reports.png";

export function Repositories() {
  const { logout, user } = useAuth();

  console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="text-black">
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <img src={r}></img>
            <h5>
              Welcome :<p></p>
              <p>{user.displayName || user.email}</p>
              <p>
                <FontAwesomeIcon icon={faCircleStop}></FontAwesomeIcon> Active
              </p>
            </h5>
            <div className="">
              <Button
                variant="light"
                className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black"
                onClick={handleLogout}
              >
                Logout
              </Button>
              {""}
            </div>
          </Nav>
        </Container>
      </Navbar>
      <p></p>
      <form className=" bg-slate-100  rounded px-4 pt-3 pb-4 mb-2 shadow rounded border-2">
        <div className="mb-4">
          <label className="block text-black-700 text-sm font-bold mb-2">
            <center>
              <h4>Add your repositories</h4>
            </center>
          </label>
          <p></p>
          <div className="mb-4">
          <Button variant="secondary">ADD</Button>{' '}
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Your Repositories</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <Button variant="primary">Edit</Button>{' '}
                  <p>
                    
                  </p>
                  <Button variant="primary">Delete</Button>{' '}
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p></p>
        </div>
      </form>
    </div>
  );
}
