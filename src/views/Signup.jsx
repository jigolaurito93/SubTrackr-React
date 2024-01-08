import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import AuthDetails from "../components/AuthDetails";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form action="" onSubmit={signUp}>
        <h1>Create Account</h1>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="border"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="border"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="border">
          Sign Up
        </button>
      </form>

      <AuthDetails />
    </div>
  );
}

export default Signup;
