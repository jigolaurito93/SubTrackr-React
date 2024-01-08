import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-8">
      <div>
        <ul className="flex h-14 tracking-widest justify-evenly items-center border-2">
          <li>
            <Link to={"/"}>
              <a href="">HOME</a>
            </Link>
          </li>
          <li>
            <Link to={"/about"}>
              <a href="">ABOUT US</a>
            </Link>
          </li>
          <li>
            <Link to={"/signup"}>
              <a href="">SIGN UP</a>
            </Link>
          </li>
          <li>
            <Link to={"/signin"}>
              <a href="">LOG IN</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
