import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login.jsx";
import Register from "../pages/auth/Register.jsx";
import Dashboard from "../pages/notes/Dashboard.jsx";
import Trash from "../pages/notes/Trash.jsx";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={ <Navigate to="/login" replace />} />
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} /> 

                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/trash" element={<Trash/>} />

            </Routes>
        </BrowserRouter>
    )
} 

export default AppRoutes;