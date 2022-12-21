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
        </h5>
      </center>
      <p></p>
      <center>
        <img src={evaluator}>
        </img>
      </center>
    </div>
    
  );
};
