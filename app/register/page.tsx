"use client";
import { useState } from 'react';
import { request } from 'graphql-request';
import CreateTenantMutation from "../_definitions/mutations/tenant/create";

export default function RegisterPage() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      const variables = {
        identifier,
        password,
      };

      const data = await request("http://localhost:3001/data", CreateTenantMutation, variables);
      console.log('Successful Register:', data);
    } catch (error) {
      console.error('Error Registering:', error);
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
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
};
