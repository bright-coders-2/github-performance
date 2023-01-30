import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleStop } from "@fortawesome/free-solid-svg-icons";
import r from "../img/user.png";
import re from "../img/repositories.png";
import ref from "../img/reports.png";
import "../css/Home.css";

export function Home() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  console.log(user);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  const repositories = async (e) => {
    navigate("/repositories");
  };

  const reports = async (e) => {
    navigate("/reports");
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
        </div>
      </div>
      <p></p>
      <div className="containermenu">
        <div className="flex items-center justify-between">
          <form className=" bg-slate-100 px-6 pt-6 pb-6 mb-4  border-2">
            <div className="mb-4">
              <label className="block text-black-700 text-sm font-bold mb-2">
                <center>
                  <h4>Menu</h4>
                </center>
              </label>
              <p></p>
              <div className="mb-4 flex items-center justify-between">
                <img src={re} alt=""></img> &nbsp; &nbsp;
                <label>Repositories</label> &nbsp; &nbsp;
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={repositories}
                >
                  Get in
                </button>
              </div>
              <div className=" items-center justify-between">
                <img src={ref} alt=""></img>&nbsp; &nbsp;
                <label>Reports</label>&nbsp; &nbsp;
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={reports}
                >
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
