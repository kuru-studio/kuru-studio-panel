"use client";
import { useState } from 'react';
import { request } from 'graphql-request';
import { Input } from 'antd';
import SignInTenantMutation from "../_definitions/mutations/tenant/sign-in";
import CreateTenantMutation from "../_definitions/mutations/tenant/create";
import authenticate from "@/app/_utilities/authenticate";
import env from "@/app/_utilities/env";
import toast, { Toaster } from 'react-hot-toast';

import Atom from "@atom";

export default function AuthenticatePage() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSignIn, setIsSignIn] = useState(true);
  const { login } = authenticate();

  const handleSubmit = async () => {
    try {
      const variables = {
        identifier,
        password,
      };

      if (!isSignIn) {
        if (password !== confirmPassword) {
          toast.error("Password does not match.");
          return;
        }
      }

      const mutation = isSignIn ? SignInTenantMutation : CreateTenantMutation;
      const data = await request(env?.apiPath, mutation, variables);
      if (isSignIn) {
        const token = data?.signInTenant?.token;

        if (!!(token)) {
          login(token);
        } else {
          toast.error('Invalid identifier or password.');
        }
      } else {
        const createErrors = data?.createTenant.errors;

        if (createErrors.length >= 1) {
          createErrors.forEach((error: string) => {
            toast.error(error);
          });
        }
      }
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="bg-[#cd3c2b] flex flex-col gap-5 justify-center items-center w-screen h-screen">
      <Atom.Logo width={100} height={100} />
      <div className="w-full max-w-80 bg-white rounded shadow p-5 flex flex-col gap-3">
        <div className="text-center text-2xl text-gray-600 mb-4">{isSignIn ? "Sign In" : "Register"}</div>
        <Input
          type="text"
          placeholder="Identifier"
          value={identifier}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            };
          }}
          onChange={(e) => setIdentifier(e.target.value)}
        />
        <Input.Password
          type="password"
          placeholder="Password"
          value={password}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            };
          }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Atom.Visibility state={!isSignIn}>
          <Input.Password
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              };
            }}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Atom.Visibility>
        <div className="flex justify-between">
          <Atom.Button type="link" className="hover:underline text-[#cd3c2b] p-0 m-0" onClick={null}>Forgot Password?</Atom.Button>
          <Atom.Button onClick={handleSubmit}>{isSignIn ? "Sign In" : "Register"}</Atom.Button>
        </div>
      </div>
      <div className="mb-40">
        <Atom.Button type="link" className="text-white !hover:text-white hover:underline" onClick={() => setIsSignIn(!isSignIn)}>
          {!isSignIn ? "Sign In" : "Register"}
        </Atom.Button>
      </div>
      <Toaster
        position="bottom-right"
      />
    </div>
  );
};
