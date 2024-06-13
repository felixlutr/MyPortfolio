import "./styles.css";
import React from "react";

function App() {
  return (
    <div className="container">
      <div className="Background"></div>
      <div className="topicMyName">
        <h1>Hi my name is Felix Lyutrovnik</h1>
      </div>
      <div className="topicMyProfession">
        <h1>and i'm a Front-End Developer</h1>
      </div>
      <div className="personalDetailsContainer">
        <h1 className="detailsTopic">About Me:</h1>
        <p className="detailsContent">Birthdate: 16.08.1989</p>
        <p className="detailsContent">Address: Gedera, Benzvi Itzhak 130 </p>
        <p className="detailsContent">Email: Felixlutrovnik@gmail.com</p>
      </div>
    </div>
  );
}

export default App;
