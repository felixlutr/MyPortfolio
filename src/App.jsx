import "./styles.css";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import mypic from "../images/mypic.jpg";

function App() {
  return (
    <div className="container">
      <div className="socialNetworksContainer">
        <div className="socialNetworks">
          <span>Check My Projects</span>
          <a href="https://github.com/felixlutr">
            <FaGithub color="black" />
          </a>
        </div>
        <div className="socialNetworks">
          <span>Chat with me on</span>
          <a href="https://www.linkedin.com/in/felix-lyutrovnik/">
            <FaLinkedin color="black" />
          </a>
        </div>
      </div>
      <div className="Background"></div>
      <div className="highTopicsAndPicture">
      <div className="pictureAndInfoContainer">
          <div className="myPictureContainer">
            <img src={mypic} alt="mypicture" />;
          </div>
          <div className="selfInfo">I Belive that you need to have a passion
            for what your doing, because only then you will have a purpose and a progress.
          </div>
        </div>
        <div className="topicMyNameAndProfession">
          <h1 className="topic">Hi my name is Felix Lyutrovnik</h1>
          <h1 className="topic">and i'm a Front-End Developer</h1>
        </div>
      </div>
      <div className="personalDetailsContainer">
        <h1 className="detailsTopic">About Me :</h1>
        <p className="detailsContent">
          <br></br>Birthdate: 34 Years old (16.08.1989)
        </p>
        <p className="detailsContent">Address: Gedera, Benzvi Itzhak 130 </p>
        <p className="detailsContent">Email: Felixlutrovnik@gmail.com</p>
      </div>
      <div className="jobsContainer">
        <h1 className="detailsTopic">Job Experience :</h1>
        <p className="detailsContent">
          <br></br>(2021 - Present) ICTBIT: Monitoring Expert in the security
          sphere. work with classified organizations, banks, political customers
          on a Monitoring system named "Solarwinds". full responsibility from
          the planning stage into implementation, configuration, managing and
          performing upgrades and migrations. working daily with a lot of SQL
          queries and powershell scripts for automations or different system
          manipulations.
        </p>
        <p className="detailsContent">
          <br></br>(2020-2021) Comm-IT: Monitoring Expert in the security
          sphere. giving consultancy and managing different monitoring systems
          like Spectrum/PM/NFA, ELK , Splunk, Centerity, SCOM. working on Linux
          OS as all the systems are installed and operated on Linux
          environments. working with Postgresql and MariaDB.
        </p>
      </div>
      <div className="coursesContainer">
        <h1 className="detailsTopic">Professional Courses :</h1>
        <p className="detailsContent">
          <br></br>John Bryce: DBA , SQL Server course.
        </p>
        <p className="detailsContent">
          <br></br>Udemy: Python course,
          <br></br>CSS and HTML course,
          <br></br>Javascript course,
          <br></br>React course,
          <br></br>Fullstack Course with MERN stack.
        </p>
      </div>
      <div className="overallContainer">
        <h1 className="detailsTopic">Army :</h1>
        <p className="detailsContent">
          <br></br>Challenging service as an electro-mechanic technician in a
          very operational and classified environment. in the Air Force.
        </p>
        <h1 className="detailsTopic">Education :</h1>
        <p className="detailsContent">
          <br></br>ORT High school - Complete high school graduation.
          <br></br>ORT College - 2 more years of higher education and getting a
          Diploma after graduation as an electro-mechanic technician.
        </p>
        <h1 className="detailsTopic">Languages :</h1>
        <p className="detailsContent">
          <br></br>Hebew : Mother language
          <br></br>English : High evel
          <br></br>Russian : Talking only
        </p>
      </div>
    </div>
  );
}

export default App;
