import React from "react";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import Departments from "./Departments";

const Page = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Departments />
    </div>
  );
};

export default Page;
