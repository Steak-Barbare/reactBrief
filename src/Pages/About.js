import React from "react";
import Titre from "../Components/Titre";  

const About = () => {
  return (
    <div>
      <Titre titre="Bienvenue aux fins gourmets"/>
      <div className="box-container">
        <div className="box">
          <p className="box-text">SUCRÉ</p>
        </div>
        <div className="box">
          <p className="box-text">SALÉ</p>
        </div>
        <div className="box">
          <p className="box-text">SURPRISE</p>
        </div>
      </div>
    </div>
  );
};
  
export default About;