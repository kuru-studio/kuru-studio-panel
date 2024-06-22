'use client';
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const authenticate = () => {
  const [token, setToken] = useState<string | null>(null);

  const AUTH_TOKEN = "AUTH_TOKEN";

  useEffect(() => {
    const storedToken = Cookies.get(AUTH_TOKEN);
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const login = (token: string) => {
    setToken(token);
    Cookies.set(AUTH_TOKEN, token);
    window.location.reload();
  };

  const logout = () => {
    setToken(null);
    Cookies.remove(AUTH_TOKEN);
    window.location.reload();
  };

  return { token, login, logout };
};

export default authenticate;
