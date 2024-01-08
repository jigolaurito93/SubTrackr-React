import React from "react";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./views/About";
import Signin from "./views/Signin";
import Signup from "./views/Signup";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}
