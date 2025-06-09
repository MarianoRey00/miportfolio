import { createContext, useContext, useState, useEffect } from "react";
import {
  registerRequest,
  loginRequest,
  verifyTokenRequest,
} from "../api/auth.js";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  const signUp = async (user) => {
    try {
      setLoading(true);
      const res = await registerRequest(user);
      setAuthUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data.errors);
      } else {
        setErrors([
          {
            message: "Error con el servidor, reintentar mas tarde",
          },
        ]);
      }
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (user) => {
    try {
      setLoading(true);
      const res = await loginRequest(user);
      setAuthUser(res.data);
      setIsAuthenticated(true);
      if (res.data.role === "Admin") {
        setIsAdmin(true);
      }
      setErrors([]);
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data.errors);
      } else {
        setErrors([
          {
            message: "Error con el servidor, reintentar mas tarde",
          },
        ]);
      }
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    setIsAdmin(false);
    setAuthUser(null);
  };

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await verifyTokenRequest();
        if (!res.data) {
          setIsAuthenticated(false);
          setAuthUser(null);
          return;
        }
        setIsAuthenticated(true);
        setAuthUser(res.data);
        if (res.data.role === "Admin") {
          setIsAdmin(true);
        }
      } catch (error) {
        setIsAuthenticated(false);
        setAuthUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signUp,
        authUser,
        isAuthenticated,
        isAdmin,
        signIn,
        loading,
        logout,
        errors,
        setErrors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
