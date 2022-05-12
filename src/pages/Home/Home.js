import React from "react";
import "./Home.css";
import talImg from "./Images/TalShabtay.jpg";
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

function Home(props) {
  return (
    <section className="p-home fadeIn animated" id="home">
      <figcaption>
        <div className="container-banner zoomIn animated">
          <div className="banner-contant">
            <div className="face-images">
                <div className="circle-ripple"></div>
                <img src={talImg}/>
            </div>
            <div className="banner-text">
                <h1>Tal Shabtay</h1>
                <h2>Frontend Engineer</h2>
            </div>
            <ul className="social">
                <li><a href="https://www.linkedin.com/in/tal-shabtay-6ba23593/" target="_blank"><FaLinkedinIn /></a></li>
                <li><a href="https://github.com/TalSBA" target="_blank"><FaGithub/></a></li>
                <li><a href="https://www.facebook.com/talshabtay2609/" target="_blank"><FaFacebookF/></a></li>
            </ul>
          </div>
        </div>
      </figcaption>
    </section>
  );
}

export default Home;
