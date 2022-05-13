import React from "react";
import "./App.css";
import { useRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";
import Navbar from "./components/Navbar";

function App() {
  const { login, logout, token, userId } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  return (
    <AuthContext.Provider
      value={{
        token,
        userId,
        login,
        logout,
        isAuthenticated,
      }}
    >
      <BrowserRouter>
        {isAuthenticated && <Navbar />}
        {routes}
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
