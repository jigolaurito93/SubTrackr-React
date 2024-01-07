import React from "react";
import Navbar from "../components/Navbar";
import Index from "../components/Index";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="top-0 relative">
        <Index />
      </div>
    </div>
  );
}
