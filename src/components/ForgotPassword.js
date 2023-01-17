import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/ForgotPassword.css";
import { useNavigate } from "react-router-dom";

export function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Checa tu bandeja de entrada y sigue las instrucciones");
    } catch {
      setError("Fallo al restaurar tu password");
    }

    setLoading(false);
  }

  const Regresar = async (e) => {
    navigate("/login");
  };

  return (
    <div className="fondoFP">
      <div className="containerFP">
        {error && <h1>{error}</h1>} <center><h2>Recuperar contraseña</h2></center>
        <center>
          <form
            className="bg-gray px-4 pt-3 pb-2 mb-2 border-16"
            onSubmit={handleSubmit}
          >
            <label>Email</label>&nbsp; &nbsp; 
            <input
              type="email"
              autoFocus
              required
              ref={emailRef}
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="youremail@gmail.com"
            />
            &nbsp; &nbsp;
            <button
                type="submit"
                disabled={loading}
                className="btnatras hover:bg-blue-700 text-white font-bold py-1 px- 
            rounded focus:outline-none focus:shadow-outline"
              >
                Reset Password

              </button>
            <div className="btnContainer">
                <p></p>
              <p>
                <button
                  className="btnatrasr bg-slate-50 hover:bg-blue-600 text-white  shadow rounded border-2 border-gray-300 py-2 px-4"
                  onClick={Regresar}
                >
                  Regresar
                </button>
              </p>
            </div>
          </form>
        </center>
      </div>
    </div>
  );
}
