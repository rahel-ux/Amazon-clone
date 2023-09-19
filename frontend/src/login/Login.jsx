import React, { useState } from "react";
import { auth } from "../Firbase";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) navigate("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(error.message);
      });
  };

  return (
    <div className="bg-white h-screen flex flex-col items-center">
      <Link to="/">
        <img
          className="m-5 mb-5 object-contain w-[100px] mx-auto"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        />
      </Link>

      <div className="w-[300px] h-fit flex flex-col rounded-md p-5 border-gray-200 border-solid">
        <h1 className="font-medium mb-5">Sign-in</h1>
        <form>
          <h5 className="mb-1">E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-[30px] mb-[10px] bg-white w-5/6"
          />
          <h5 className="mb-1">Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-[30px] mb-[10px] bg-white w-5/6"
          />
          <button type="submit" onClick={signIn} className="loginButton">
            Sign In
          </button>
        </form>

        <p className="mt-[15px] text-xs">
          By signing-in you agree to the AMAZON FAKE CLONE conditions of Use
          Sale. Please see our Privacy Notice, ourCookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button onClick={register} className="loginButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
