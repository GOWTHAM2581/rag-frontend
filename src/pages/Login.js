import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    await signInWithEmailAndPassword(auth, email, password);
    onLogin();
  };

  return (
    <div>
      <h1>Login</h1>
      <input placeholder="email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="password" type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
