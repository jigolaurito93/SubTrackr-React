import React from "react";
import bgImage from "../assets/pexels-lukas-317356.jpg";
import logo from "../assets/Subtrackr (3).png";

function Index() {
  return (
    <div>
      <div className="top-0 fixed -z-10">
        <img src={bgImage} alt="" className="" />
      </div>
      <div className="w-full flex justify-center items-center">
        <img src={logo} alt="" className="w-[40%]" />
      </div>
    </div>
  );
}

export default Index;
