import { createContext, useState, useContext, useEffect } from "react";

export const LoginContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (user) => {
    setUser(user);
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <LoginContext.Provider value={{ user, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => useContext(LoginContext);
