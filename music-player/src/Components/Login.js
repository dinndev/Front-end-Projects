import React from "react";
import App from "../App";
import { loginUrl } from "./Spotify";

function Login() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <a
        className="h-10 items-center shadow-sm hover:shadow-md flex justify-center text-black transition-all hover:text-blue-600 w-52 rounded-full bg-white text-lg"
        href={loginUrl}
      >
        Login
      </a>
    </div>
  );
}

export default Login;
