import "./styles.css";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div className="container">
      <div className="socialNetworks">
        Check My Projects 
        <a href="https://github.com/felixlutr">
          <FaGithub />
         </a>
        
          or Chat with me on 
        <a href="https://www.linkedin.com/in/felix-lyutrovnik/">
        <FaLinkedin />
        </a>
        
      </div>
      <div className="Background"></div>
      <div className="topicMyName">
        <h1>Hi my name is Felix Lyutrovnik</h1>
      </div>
      <div className="topicMyProfession">
        <h1>and i'm a Front-End Developer</h1>
      </div>
      <div className="personalDetailsContainer">
        <h1 className="detailsTopic">About Me:</h1>
        <p className="detailsContent">Birthdate: 34 Years old (16.08.1989)</p>
        <p className="detailsContent">Address: Gedera, Benzvi Itzhak 130 </p>
        <p className="detailsContent">Email: Felixlutrovnik@gmail.com</p>
      </div>
      <div className="jobsContainer">
        <h1 className="detailsTopic">Job Experience:</h1>
        <p className="detailsContent">
          (2021 - Present) ICTBIT: Monitoring Expert in the security sphere.
          work with classified organizations, banks, political customers on a
          Monitoring system named "Solarwinds". full responsibility from the
          planning stage into implementation, configuration, managing and
          performing upgrades and migrations. working daily with a lot of SQL
          queries and powershell scripts for automations or different system
          manipulations.
        </p>
        <p className="detailsContent">
          (2020-2021) Comm-IT: Monitoring Expert in the security sphere. giving
          consultancy and managing different monitoring systems like
          Spectrum/PM/NFA, ELK , Splunk, Centerity, SCOM. working on Linux OS as
          all the systems are installed and operated on Linux environments.
          working with Postgresql and MariaDB.
        </p>
      </div>
      <div className="coursesContainer">
        <h1 className="detailsTopic">Professional Courses:</h1>
      </div>
    </div>
  );
}

export default App;
