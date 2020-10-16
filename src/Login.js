import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { provider, auth } from "./firebase";

function Login() {
  const signIn = (e) => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="./logo.jpg"
          alt=""
        />
      </div>
      <Button onClick={signIn}>Login In</Button>
    </div>
  );
}

export default Login;
