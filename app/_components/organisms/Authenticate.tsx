"use client";
import { useState } from 'react';
import { request } from 'graphql-request';
import SignInTenantMutation from "../../_definitions/mutations/tenant/sign-in";
import CreateTenantMutation from "../../_definitions/mutations/tenant/create";

const Authenticate: React.FunctionComponent = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSubmit = async () => {
    try {
      const variables = {
        identifier,
        password,
      };

      const mutation = isSignIn ? SignInTenantMutation : CreateTenantMutation;

      const data = await request("http://localhost:3001/data", mutation, variables);
      console.log(`Successful ${isSignIn ? 'Sign In' : 'Register'}:`, data);
    } catch (error) {
      console.error(`Error ${isSignIn ? 'Sign In' : 'Register'}:`, error);
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => setIsSignIn(!isSignIn)}>
          {!isSignIn ? "Sign In" : "Register"}
        </button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Identifier"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>{isSignIn ? "Sign In" : "Register"}</button>
      </div>
    </div>
  );
};

export default Authenticate;
