'use client';
import { useState, useEffect } from "react";

const authenticate = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const login = (token: string) => {
    setToken(token);
    localStorage.setItem("authToken", token);
    window.location.reload();
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("authToken");
    window.location.reload();
  };

  return { token, login, logout };
};

export default authenticate;
