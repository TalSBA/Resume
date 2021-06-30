import React from "react";
import Menu from "../../components/Menu/Menu";
import About from "../About/About";
import Home from "../Home/Home";
import MyResume from "../MyResume/MyResume";
import Protfolio from "../Portfolio/Protfolio";
import Skills from "../Skills/Skills";

function Resume(props) {
  return (
    <div>
      <Menu />
      <Home />
      <About />
      <Skills />
      <MyResume />
      <Protfolio />
    </div>
  );
}

export default Resume;
