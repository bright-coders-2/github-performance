import { useState,useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { Alert } from "./Alert";
import "../css/Register.css";
//import "../css/App.css";

export function Register() {
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth();
  const [user, setUser] = useState({
    firsname:"",
    lastname:"",
    username:"",
    password:"",
    conffirmpassword:"",
    email: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError('Las contraseñas no son iguales')
      }else{
      await signup(user.firstname,user.lastname,user.username,user.password,user.conffirmpassword,user.email);
      navigate("/login");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="ff">
      <div className="ll">
        {error && <Alert message={error} />}
        <form
          onSubmit={handleSubmit}
          className="bg-gray px-4 pt-3 pb-2 mb-2 border-16"
        >
          <div className="mb-4">
            <label
              htmlFor="firstname"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              FirstName
            </label>
            <input
              required
              type="firstname"
              onChange={(e) => setUser({ ...user, firsname: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastname"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              LastName
            </label>
            <input
              required
              type="lastname"
              onChange={(e) => setUser({ ...user, lastname: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              UserName
            </label>
            <input
              required
              type="username"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              required
              maxlength="8"
              type="password"
              ref={passwordRef}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="********"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="conffirmpassword"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Conffirm Password
            </label>
            <input
              required
              maxlength="8"
              type="conffirmpassword"
              ref={passwordConfirmRef}
              onChange={(e) =>
                setUser({ ...user, conffirmpassword: e.target.value })
              }
              className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="********"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              required
              type="email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="youremail@company.tld"
            />
          </div>
          <center>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline">
              Register
            </button>
          </center>
          <p className="my-4 text-sm flex justify-between px-3">
            Already have an Account? &nbsp;
            <Link to="/login" className="text-blue-700 hover:text-blue-900">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
