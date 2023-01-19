//Importamos los componentes a utilizar en el App.js

import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Home } from "./components/Home";
import { Repositories } from "./components/Repositories";
import { Reports} from "./components/Reports";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/authContext";
import { Welcome } from "./components/Welcome"
import {ForgotPassword} from "./components/ForgotPassword"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="bg-slate text-black h-screen flex text-black">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Welcome></Welcome>}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword/>} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
          path="/repositories"
          element={
            <ProtectedRoute>
              <Repositories></Repositories>
            </ProtectedRoute>
          }>
          </Route>
          <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <Reports></Reports>
            </ProtectedRoute>
          }>
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
