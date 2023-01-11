<<<<<<< Updated upstream
=======
//Luis Chavez Delgado
//Maria Guadalupe Cedeño Llanos
//Proyecto de Residencia 

//Importamos los componentes que vamos a necesitar para la vista Login
import React from "react";
>>>>>>> Stashed changes
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { Alert } from "./Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';
<<<<<<< Updated upstream
import '../css/App.css';

//Vista Completada 

export function Login() {
=======
import '../css/Login.css';
import Popup from 'reactjs-popup';


//Exportamos la funcion Login

export function  Login() {

  const handleClick = () => {
    Popup.open({
      title: 'Ventana Modal',
      content: (
        <div>
          Este es el contenido de la ventana modal, haz clic en el siguiente
          botón para abrir otra ventana:
          <button className='btn-blue' onClick={() => {
            Popup.open('Segundo ventana, la primera se oculta hasta cerrar ésta')
          }}>
            Abrir otra ventana sin título
          </button>
        </div>
      ),
      height: '100%',
      width: '100%'
    });
  };

   //Activamos una variable constante para obtener el email y el password para iniciar sesioon
>>>>>>> Stashed changes
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
<<<<<<< Updated upstream
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

=======

  //Activamos variable constante para las acciones de login , login con google y resetear el password
  const { login, loginWithGoogle, resetPassword } = useAuth();

  //Activamos variable constante para en caso de que nos marque error la aplicacion en alguna accion 
  const [error, setError] = useState("");

  //Biblioteca popular para realizar enrutamiento y navegación en una aplicación React Native
  const navigate = useNavigate();

  //Definimos una variable constante donde se ingresan los datos y esto se comparan con los que estan en 
  //Firebase y asi se determine que el usuario pueda iniciar sesion 
>>>>>>> Stashed changes
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

<<<<<<< Updated upstream
  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

=======
  //Esta constante nos sirve para obtener los datos de inicion de sesion y mediante el handlesubmit se determine 
  //si el usuario puede iniciar sesion si este esta registrado
  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  //Esta constante handleGoogleSignin nos permite hacer una funcion en la que el usuario puede iniciar sesion mediante una cuenta
  //de google
>>>>>>> Stashed changes
  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

<<<<<<< Updated upstream
=======
  //Esta constante handleResetPassword nos permite hacer una funcion en la que en el caso de que el usuairio 
  //Olvidase su contrase , se restaure mediante el cambio de contraseña
>>>>>>> Stashed changes
  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Write an email to reset password");
    try {
      await resetPassword(user.email);
      setError("We sent you an email. Check your inbox");
    } catch (error) {
      setError(error.message);
    }
  };

<<<<<<< Updated upstream
=======
  //Retorna las acciones de la funcion Login  
>>>>>>> Stashed changes
  return (
    <div className="f">
      <div className="l">
      {error && <Alert message={error} />}
      <form
        onSubmit={handleSubmit}
        className="bg-gray px-4 pt-3 pb-2 mb-2 border-16"
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
            type="email"
            name="email"
            id="email"
<<<<<<< Updated upstream
            onChange={handleChange}
=======
            onChange={handleChange} 
>>>>>>> Stashed changes
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
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="*************"
            />
          </div>
          <div className="flex items-center justify-between">
            <Button
              variant="dark"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px- 
            rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </Button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#!"
              onClick={handleResetPassword}
            >
              Forgot Password?
            </a>
            <label>
              <FontAwesomeIcon icon={faCircleExclamation}>
              </FontAwesomeIcon>
<<<<<<< Updated upstream
=======

              <div className='d-flex align-items-center justify-content-center h-100'>
      <Popup />
      <button className='btn-blue' onClick={handleClick}>Abrir ventana</button>
    </div>
>>>>>>> Stashed changes
            </label>
          </div>
          <p></p>
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
        </div>
      </form>
    </div>
    </div>
    
  );
  
}
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
