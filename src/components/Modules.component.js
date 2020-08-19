import React from "react";
import Module from "../Data/Modules";
import "../styles/Modules.css";
import Card from './Card';

const ModuleList = Module.map((module) => (
  <>
    <Card module={module}/>
  </>
));

const Modules = () => {

  return (
    <>
      <header class="main">
        <h1>Modules</h1>
        <button>More</button>
      </header>
      <div className="cards-container">{ModuleList}</div>
    </>
  );
};

export default Modules;
