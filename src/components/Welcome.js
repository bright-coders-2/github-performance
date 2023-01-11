<<<<<<< Updated upstream
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import evaluator from "../img/evaluator.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import '../css/App.css';


export function Welcome ()  {
  return (
    <div className="hero" >
      <Navbar  >
      <h2>Welcome</h2>
        <Container>
        </Container>
        <Button ><Link to="/login">Login</Link></Button>
      </Navbar>
      <p>
      </p>
      <h1>Github Performance</h1>
      <p>
      </p>
      <center>
        <h5>
        Register, log in and get the evaluations of your developers based on the
        information from github
=======
//Luis Chavez Delgado
//Maria Guadalupe Cedeño Llanos
//Proyecto de Residencia 

//Importamos los componentes que vamos a necesitar para la vista Welcome
import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import evaluator from "../img/evaluator.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../css/Welcome.css";

//Exportamos la funcion Welcome
export function Welcome() {

  //Biblioteca popular para realizar enrutamiento y navegación en una aplicación React Native
  const navigate = useNavigate();

  //Variable constante para el login , para el cambio de vusta 
  const Login = async (e) => {
    navigate("/login");
  };

  //Retorna las acciones de la funcion Welcome 
  return (
    <div className="hero">
      <Navbar>
        <h2>Welcome</h2>
        <Container></Container>
        <button className="btnwelcome" onClick={Login}>
          Login
        </button>
      </Navbar>
      <p></p>
      <h1>Github Performance</h1>
      <p></p>
      <center>
        <h5>
          Register, log in and get the evaluations of your developers based on
          the information from github
>>>>>>> Stashed changes
        </h5>
      </center>
      <p></p>
      <center>
<<<<<<< Updated upstream
        <img src={evaluator}>
        </img>
      </center>
    </div>
    
  );
};
=======
        <img src={evaluator} alt=""></img>
      </center>
    </div>
  );
}
>>>>>>> Stashed changes
