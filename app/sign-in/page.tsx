"use client";
import { useState } from 'react';
import { request } from 'graphql-request';
import SignInTenantMutation from "../_definitions/mutations/tenant/sign-in";

export default function RegisterPage() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      const variables = {
        identifier,
        password,
      };

      const data = await request("http://localhost:3001/data", SignInTenantMutation, variables);
      console.log('Successful Sign In:', data);
    } catch (error) {
      console.error('Error Sign In:', error);
    }
  };

  return (
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
      <button onClick={handleSubmit}>Sign In</button>
    </div>
  );
};
