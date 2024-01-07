import React from "react";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-8">
      <div>
        <ul className="flex h-14 tracking-widest justify-evenly items-center border-2">
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">ABOUT US</a>
          </li>
          <li>
            <a href="">SIGN UP</a>
          </li>
          <li>
            <a href="">LOG IN</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
