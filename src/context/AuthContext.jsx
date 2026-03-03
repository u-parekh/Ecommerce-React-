import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const SESSION_TIME = 5 * 60 * 1000;

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = JSON.parse(localStorage.getItem("session"));
    if (session && Date.now() < session.expiry) {
      setUser(session.user);
    } else {
      logout();
    }
  }, []);

  const login = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      const session = {
        user: storedUser,
        expiry: Date.now() + SESSION_TIME,
      };
      localStorage.setItem("session", JSON.stringify(session));
      setUser(storedUser);
      return true;
    }
    return false;
  };

  const register = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
  };

  const logout = () => {
    localStorage.removeItem("session");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
