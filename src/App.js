import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Home } from "./components/Home";
import { Repositories } from "./components/Repositories";
import { Reports} from "./components/Reports"
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/authContext";
import { Welcome } from "./components/Welcome"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="bg-slate text-black h-screen flex text-black">
      <AuthProvider>
        <Routes>
        <Route path="/welcome" element={<Welcome></Welcome>}></Route>
          <Route path="/login" element={<Login />} />
          <Route
          path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/repositories" element={<Repositories />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App; 
