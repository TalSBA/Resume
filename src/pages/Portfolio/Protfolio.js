import React from 'react';
import "./Portfolio.css";
import { FcVideoProjector } from 'react-icons/fc';
import { CardImg, Row, Col } from 'react-bootstrap';
import torAppImg from './images/TorApp.PNG';
import moviesAppImg from './images/MoviesApp.PNG';
import dogsAppImg from './images/DogsApp.PNG';
import resumeAppImg from './images/ResumeApp.PNG';
import todosAppImg from './images/TodosApp.png';
import weatherAppImg from './images/WeatherApp.PNG';


function Protfolio(props) {
    return (
        <section className="p-portfolio" id="portfolio">
            <div className="title animated fadeInUp">
                <FcVideoProjector />
                <h2>Recent Portfolio</h2>
            </div>
            <Row>
                <Col md={4} className="fadeIn">
                    <div className="portfolio">
                        <CardImg src={torAppImg} />
                        <div className="fig-caption">
                            <h5 className="title">Tor</h5>
                            <span class="sub-title">Schedule appointment application</span>
                            <a className="gallery" href="https://talsba.github.io/Tor/#/" target="_blank"></a>
                        </div>
                    </div>
                    <div className="portfolio">
                        <CardImg src={moviesAppImg} />
                        <div className="fig-caption">
                            <h5 className="title">Movies</h5>
                            <span class="sub-title">Search movies & actors</span>
                            <a className="gallery" href="https://talsba.github.io/movies-app/#/" target="_blank"></a>
                        </div>
                    </div>
                </Col>
                <Col md={4}  className="fadeIn">
                    <div className="portfolio">
                        <CardImg src={dogsAppImg} />
                        <div className="fig-caption">
                            <h5 className="title">Dogs breeds</h5>
                            <span class="sub-title">Search dogs breeds</span>
                            <a className="gallery" href="https://talsba.github.io/dogs-app/#/" target="_blank"></a>
                        </div>
                    </div>
                    <div className="portfolio">
                        <CardImg src={resumeAppImg} />
                        <div className="fig-caption">
                            <h5 className="title">My Resume</h5>
                            <span class="sub-title">resume application</span>
                            <a className="gallery" href="https://talsba.github.io/Resume/" target="_blank"></a>
                        </div>
                    </div>
                </Col>
                <Col md={4}  className="fadeIn">
                    <div className="portfolio">
                        <CardImg src={weatherAppImg} />
                        <div className="fig-caption">
                            <h5 className="title">Weather</h5>
                            <span class="sub-title">Weather by city application </span>
                            <a className="gallery" href="https://talsba.github.io/Tal-Shabtay-15-06-2021/" target="_blank"></a>
                        </div>
                    </div>
                    <div className="portfolio">
                        <CardImg src={todosAppImg} />
                        <div className="fig-caption">
                            <h5 className="title">ToDo</h5>
                            <span class="sub-title">ToDos lists application </span>
                            <a className="gallery" href="https://talsba.github.io/Todos/" target="_blank"></a>
                        </div>
                    </div>
                </Col>
            </Row>
        </section>
    );
}

export default Protfolio;