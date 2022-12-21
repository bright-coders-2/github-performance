import { useAuth } from "../context/authContext";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleStop } from "@fortawesome/free-solid-svg-icons";
import r from "../img/user.png";
import re from "../img/repositories.png"
import ref from "../img/reports.png"
import '../css/App.css';
import styled from 'styled-components';
import { Overlay } from "react-bootstrap";

export function Home() {
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
    <div className="fondomenu">
      <div className="containeruser">
      <div className="flex items-center justify-between">
        <Navbar bg="light" variant="light">
          <Container>
            <img src={r}></img>
            <h4>
              Welcome :<p></p>
              <p>{user.displayName || user.email}</p>
              <p>
                <FontAwesomeIcon icon={faCircleStop}></FontAwesomeIcon> Active
              </p>
            </h4>
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
          </Container>
        </Navbar>
      
        {" "}
        </div>
      </div>
        <p>

        </p>
        <div className="containermenu">
        <div className="flex items-center justify-between"> 
        <form className=" bg-slate-100 px-4 pt-3 pb-4 mb-2  border-2">
          <div className="mb-4">
            <label className="block text-black-700 text-sm font-bold mb-2">
              <center>
                <h4>Menu</h4>
              </center>
            </label>
            <p></p>
            <div className="mb-4"></div>
            <div className="flex items-center justify-between">
              <img src={re}></img>
              <label>Repositories</label>
              <p>
                <Link
                  to="/repositories"
                  className="text-blue-700 hover:text-blue-900"
                >
                  Get In
                </Link>
              </p>
            </div>
            <p></p>
            <div className="flex items-center justify-between">
              <img src={ref}></img>
              <label>Reports</label>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                <Link to=""></Link>
                Get in
              </button>
            </div>
          </div>
        </form>
        </div>
        </div>
        
        
      </div>
  );
}


