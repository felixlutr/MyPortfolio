import "./styles.css";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import mypic from "../images/mypic.jpg";

function App() {
  return (
    <div className="container">
      <div className="socialNetworksContainer">
        <a
          className="socialNetworks"
          href="https://github.com/felixlutr"
          target="_blank"
        >
          <span>Check My Projects</span>
          <FaGithub color="black" />
        </a>
        <a
          className="socialNetworks"
          href="https://www.linkedin.com/in/felix-lyutrovnik/"
          target="_blank"
        >
          <span>Chat with me on</span>
          <FaLinkedin color="black" />
        </a>
      </div>
      <div className="Background"></div>
      <div className="highTopicsAndPicture">
        <img className="myPictureContainer" src={mypic} alt="mypicture" />
        <div>
          <h1 className="topicMyNameAndProfession">
            Hi my name is Felix Lyutrovnik
          </h1>
          <h1 className="topicMyNameAndProfession">
            and i'm a Front-End Developer
          </h1>
        </div>
      </div>
      <div className="personalDetailsContainer">
        <input
          type="checkbox"
          id="about-me-checkbox"
          style={{ display: "none" }}
        />
        <h1 className="detailsTopic">
          <label
            htmlFor="about-me-checkbox"
            style={{ display: "block", cursor: "pointer" }}
          >
            About Me <span>{">"}</span>
          </label>
        </h1>
        <div className="about-me-content">
          <div>
            <p className="detailsContent">
              Birthdate: 34 Years old (16.08.1989)
            </p>
            <p className="detailsContent">
              Address: Gedera, Benzvi Itzhak 130{" "}
            </p>
            <p className="detailsContent">Email: Felixlutrovnik@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="jobsContainer">
        <input type="checkbox" id="jobs-checkbox" style={{ display: "none" }} />
        <h1 className="detailsTopic">
          <label
            htmlFor="jobs-checkbox"
            style={{ display: "block", cursor: "pointer" }}
          >
            Job Experience <span>{">"}</span>
          </label>
        </h1>
        <div className="jobs-content">
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
            <br></br>(2020-2021) Comm-IT: Monitoring Expert in the security
            sphere. giving consultancy and managing different monitoring systems
            like Spectrum/PM/NFA, ELK , Splunk, Centerity, SCOM. working on
            Linux OS as all the systems are installed and operated on Linux
            environments. working with Postgresql and MariaDB.
          </p>
        </div>
      </div>
      <div className="coursesContainer">
        <input
          type="checkbox"
          id="courses-checkbox"
          style={{ display: "none" }}
        />
        <h1 className="detailsTopic">
          <label
            htmlFor="courses-checkbox"
            style={{ display: "block", cursor: "pointer" }}
          >
            Professional Courses <span>{">"}</span>
          </label>
        </h1>
        <p className="detailsContent">
          John Bryce: DBA , SQL Server course.
          <br></br>Udemy: Python course,
          <br></br>CSS and HTML course,
          <br></br>Javascript course,
          <br></br>React course,
          <br></br>Fullstack Course with MERN stack.
        </p>
      </div>
      <div className="overallContainer">
        <input
          type="checkbox"
          id="overall-checkbox"
          style={{ display: "none" }}
        />
        <h1 className="detailsTopic">Army :</h1>
        <p className="detailsContent">
          Challenging service as an electro-mechanic technician in a very
          operational and classified environment. in the Air Force.
        </p>
        <h1 className="detailsTopic">Education :</h1>
        <p className="detailsContent">
          ORT High school - Complete high school graduation. ORT College - 2
          more years of higher education and getting a Diploma after graduation
          as an electro-mechanic technician.
        </p>
        <h1 className="detailsTopic">Languages :</h1>
        <p className="detailsContent">
          Hebew : Mother language
          <br></br>English : High evel
          <br></br>Russian : Talking only
        </p>
      </div>
    </div>
  );
}

export default App;
