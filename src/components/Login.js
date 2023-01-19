//Luis Chavez Delgado 17460348
//Maria Guadalupe Cedeño Llanos 17460080
//Proyecto de Residencia

//Importamos los componentes que vamos a necesitar para la vista Login
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { Alert } from "./Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import "../css/Login.css";
import styled from "styled-components";
import Modal from "../subcomponents/Modal";

//Exportamos la funcion Login

export function Login() {
  //Activamos una variable constante para obtener el email y el password para iniciar sesioon

  const [EstadoModal, CambiarEstadoModal] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //Activamos variable constante para las acciones de login , login con google y resetear el password
  const { login, loginWithGoogle } = useAuth();

  //Activamos variable constante para en caso de que nos marque error la aplicacion en alguna accion
  const [error, setError] = useState("");

  //Biblioteca popular para realizar enrutamiento y navegación en una aplicación React Native
  const navigate = useNavigate();

  //Definimos una variable constante donde se ingresan los datos y esto se comparan con los que estan en
  //Firebase y asi se determine que el usuario pueda iniciar sesion
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  //Esta constante nos sirve para obtener los datos de inicion de sesion y mediante el handlesubmit se determine
  //si el usuario puede iniciar sesion si este esta registrado
  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  //Esta constante handleGoogleSignin nos permite hacer una funcion en la que el usuario puede iniciar sesion mediante una cuenta
  //de google
  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  //Esta constante handleResetPassword nos permite hacer una funcion en la que en el caso de que el usuairio
  //Olvidase su contrase , se restaure mediante el cambio de contraseña
  /* const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Write an email to reset password");
    try {
      await resetPassword(user.email);
      setError("We sent you an email. Check your inbox");
    } catch (error) {
      setError(error.message);
    }
  };
*/

  const handleResetPassword = async (e) => {
    navigate("/forgotpassword");
  };

  const regresar = async (e) => {
    navigate("/");
  };

  //Retorna las acciones de la funcion Login
  return (
    <div className="f">
      <div className="l">
        {error && <Alert message={error} />}
        <form
          onSubmit={handleSubmit}
          className="bg-gray px-4 pt-3 pb-1 mb-1 border-16"
        >
          <div className="mb-4">
            <label className="block text-black-700 text-sm font-bold mb-2">
              <center>
                <h4>Github Performance</h4>
              </center>
            </label>
            <p></p>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <FontAwesomeIcon icon={faUser} className=""></FontAwesomeIcon>
            &nbsp;&nbsp;
            <input
              required
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="youremail@gmail.com"
            />
            <p></p>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
              &nbsp;&nbsp;
              <input
                required
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="*************"
              />
            </div>
            <Button
              variant="dark"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px- 
            rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </Button>
            &nbsp; &nbsp;
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#!"
              onClick={handleResetPassword}
            >
              Forgot Password?
            </a>
            &nbsp; &nbsp;
            <FontAwesomeIcon icon={faCircleExclamation}> </FontAwesomeIcon>
            &nbsp;&nbsp;
            <label>
              <ContenedorBotones>
                <Boton onClick={() => CambiarEstadoModal(!EstadoModal)}>
                  Modal1 
                </Boton>
              </ContenedorBotones>
            </label>
          </div>
        </form>
        <center>
          <button
            onClick={handleGoogleSignin}
            className="bg-slate-50 hover:bg-slate-200 text-black  shadow rounded border-2 border-gray-300 py-2 px-4 "
          >
            <label className="">
              <FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon>
            </label>
            &nbsp; Sign in With Google
          </button>
          &nbsp; &nbsp;
          <label>
            <FontAwesomeIcon icon={faCircleExclamation}></FontAwesomeIcon>
          </label>
        </center>
        <p className="my-4 text-sm flex justify-between px-3">
          Don't have an account?
          <Link to="/register" className="text-blue-700 hover:text-blue-900">
            Register
          </Link>
        </p>
        <center>
          <button
            className="btnatras bg-slate-50 hover:bg-blue-600 text-white  shadow rounded border-2 border-gray-300 py-2 px-4"
            onClick={regresar}
          >
            Regresar
          </button>
        </center>
      </div>
      <Modal
        estado={EstadoModal}
        cambiarestado={CambiarEstadoModal}
        mostrarheader={true}
      >
        <Contenido>
          <p>Aqui puedes cambiar de contraseña en caso de olvidarla</p>
          <Boton onClick={() => CambiarEstadoModal(!EstadoModal)}>
            Aceptar
          </Boton>
        </Contenido>
      </Modal>
      <p></p>
    </div>
  );
}

const ContenedorBotones = styled.div`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Boton = styled.button`
  display: block;
  padding: 5px 10px;
  border-radius: 100px;
  color: #fff;
  border: none;
  background: #1766dc;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  transition: 0.3s ease all;
  &:hover {
    background: #0066ff;
  }
`;

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  p {
    font-size: 18px;
    margin-bottom: 20px;
  }
  img {
    width: 100%;
    vertical-align: top;
    border-radius: 3px;
  }
`;
