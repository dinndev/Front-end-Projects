import React from "react";
import App from "../App";
import { loginUrl } from "./Spotify";

function Login() {
  return (
    <>
      <a href={loginUrl}>Login</a>
    </>
  );
}

export default Login;
