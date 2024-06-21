'use client';
import { useState, useEffect } from "react";

const authenticate = () => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<string | null>(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
    }
    setLoading(false);
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

  return { token, loading, login, logout };
};

export default authenticate;
