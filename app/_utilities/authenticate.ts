import { useState, useEffect } from "react";

const authenticate = () => {
  const [token, setToken] = useState<string | null>(null);
  const [roleLabel, setRoleLabel] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    const roleLabel = localStorage.getItem("roleLabel");
    if (storedToken) {
      setToken(storedToken);
      if (roleLabel) setRoleLabel(roleLabel);
    }
    setLoading(false);
  }, []);

  const login = (newToken: string, role: any) => {
    setToken(newToken);
    setRoleLabel(role);
    localStorage.setItem("authToken", newToken);
    localStorage.setItem("roleLabel", role);
  };

  const logout = () => {
    setToken(null);
    setRoleLabel(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("roleLabel");
  };

  return { token, loading, login, logout, roleLabel };
};

export default authenticate;
