import { useEffect, useState } from "react";
import AuthContext from "./AuthContext.jsx";
import api from "../services/api.js";

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
      try {
        const res = await api.get("/auth/me");
        setUser(res.data.data);
      } catch (error) {
        setUser(null);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

  const logout = async () => {
    try {
      await api.post("/auth/logout");
    } finally {
      setUser(null);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
        value={{
            user,
            loading,
            setUser,
            checkAuth,
            logout
        }}
    >
        {children}

    </AuthContext.Provider>
  )
}

