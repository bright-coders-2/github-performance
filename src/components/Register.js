import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { Alert } from "./Alert";
import "../css/Register.css";

export function Register() {
  const { signup } = useAuth();
  const [user, setUser] = useState({
    firstname:"",
    lastname:"",
    username:"",
    email: "",
    password: "",
    confirmpassword:"",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
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
              htmlFor="Firstname"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              FirstName
            </label>
            <input
              type="firstname"
              onChange={(e) => setUser({ ...user, firstname: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="LastName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              LastName
            </label>
            <input
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
              type="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="*************"
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
              type="conffirmpassword"
              onChange={(e) => setUser({ ...user, confirmpassword: e.target.value })}
              className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="*************"
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
