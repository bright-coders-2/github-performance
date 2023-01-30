//Luis Chavez Delgado 17460348
//Maria Guadalupe Cedeño Llanos 17460080
//Proyecto de Residencia

//Importamos los componentes que vamos a necesitar para la vista Welcome
import React from "react";
import { useNavigate } from "react-router-dom";
import evaluator from "../img/evaluator.jpg";
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
    <div className="fondowelcome">
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
          the information from github.
        </h5>
      </center>
      <p></p>
      <center>
        <h5>Click on "Login" to access the functions of the program</h5>
      </center>
      <p></p>
      <center>
        <img src={evaluator} alt=""></img>
      </center>
    </div>
  );
}


//Vista Welcome Terminada