import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login.jsx";
import Register from "../pages/auth/Register.jsx";
import Dashboard from "../pages/notes/Dashboard.jsx";
import Trash from "../pages/notes/Trash.jsx";
import ProtectedRoutes from "./ProtectedRoutes.jsx";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/trash"
          element={
            <ProtectedRoutes>
              <Trash />
            </ProtectedRoutes>
          }
        />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
