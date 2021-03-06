import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaDownload,
  FaDumbbell,
  FaFilm,
  FaHeadphones,
  FaInfoCircle,
  FaPaintBrush,
  FaPlane,
} from "react-icons/fa";
import { GiCupcake } from 'react-icons/gi';
import "./About.css";
import cvFile from "./CVFile/TalShabtayResume.pdf";

function About(props) {
  return (
    <section className="p-about" id="about">
      <div className="title animated fadeInUp">
        <FaInfoCircle />
        <h2>About me</h2>
      </div>
      <div className="general-info animated fadeInUp">
        <span style={{ color: "#1cb698", fontWeight: "bold" }}>
          Hello! I'm Tal.
        </span>{" "}
        A software developer with over 3 years experience, experienced in C#
        software development and client-side experience in React. Brings with me
        learning and integration skills, excellent human relations, teamwork,
        and high level technical sense. Looking for a Frontend / Fullstack
        developer position.
      </div>
      <Row>
        <Col>
          <div className="personal-details animated fadeInUp">
            <ul>
              <h3>Contact Details</h3>
              <li>
                <strong>Phone</strong> +972527436743
              </li>
              <li>
                <strong>Email</strong> tal.shabtay1409@gmail.com
              </li>
              <li>
                <strong>ADDRESS</strong> Netanya, Israel
              </li>
            </ul>
          </div>
        </Col>
        <Col>
          <div className="interests animated fadeInUp">
            <h3>My Interests</h3>
            <ul>
              <Row>
                <li>
                  <p>
                    <FaPlane />
                  </p>
                  <span>Travel</span>
                </li>
                <li>
                  <p>
                    <FaDumbbell />
                  </p>
                  <span>Fitness</span>
                </li>
                <li>
                  <p>
                    <FaHeadphones />
                  </p>
                  <span>Music</span>
                </li>
              </Row>
              <Row>
                <li>
                  <p>
                    <FaPaintBrush />
                  </p>
                  <span>Design</span>
                </li>
                <li>
                  <p>
                    <FaFilm />
                  </p>
                  <span>Movies</span>
                </li>
                <li>
                  <p>
                    <GiCupcake />
                  </p>
                  <span>Baking</span>
                </li>
              </Row>
            </ul>
          </div>
        </Col>
      </Row>
      <div className="download-cv animated fadeInUp">
        <a href={`${cvFile}`} target="_blank">Download CV <FaDownload /></a>
      </div>
    </section>
  );
}

export default About;
