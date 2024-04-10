import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

// User
// name: String
// email: String
// password: String

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUserData = localStorage.getItem("user");
    return storedUserData ? JSON.parse(storedUserData) : null;
  });

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    console.log("user : ", user);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
