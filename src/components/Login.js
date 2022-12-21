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
import '../css/App.css';

//Vista Completada 

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

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

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

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
