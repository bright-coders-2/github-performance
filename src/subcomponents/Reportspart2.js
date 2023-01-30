import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleStop } from "@fortawesome/free-solid-svg-icons";
import r from "../img/user.png";
//import SearchBar from "../subcomponents/SearchBar";
//import Table from "react-bootstrap/Table";
import "../css/Repositories.css";
//import "../css/App.css"
import TableRepos1 from "../subcomponents/TableRepos1";
import p from "../img/profile.ico"

export function Repositories() {
  
  const { logout, user } = useAuth();

  console.log(user);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout(navigate("/login"));
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
              <img src={r} alt=""></img>
              <h6>
                Welcome : &nbsp; &nbsp;&nbsp; &nbsp;
                <button
                  className="btnlogout text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={handleLogout}
                >
                  <h6>Logout</h6>
                </button>
                <p></p>
                <p>{user.displayName || user.email}</p>
                <p>
                  <FontAwesomeIcon icon={faCircleStop}></FontAwesomeIcon> Active
                </p>
              </h6>
              <div className="btnlogout"></div>
            </Container>
          </Navbar>
          <div className="conteinerrepositories ">
            <div className="flex items-center justify-between ">
              <div className="mb-4">
                <label className="block text-black-700 text-sm font-bold mb-2">
                  <center>
                    <h2>Select the way to get the reports</h2>
                  </center>
                </label>
                <div className="flex items-center justify-between">
                    <h3>Reportes de manera individual</h3>
                    <img src={p}></img>
                </div>
                <p></p>
                <div className="flex items-center justify-between">
                    <h3>Reportes de manera grupal</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
