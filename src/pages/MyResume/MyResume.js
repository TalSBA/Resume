import React from 'react';
import "./MyResume.css";
import { FaIdCard } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
import EducationItem from '../../components/EducationItem/EducationItem';
import ExperienceItem from '../../components/ExperienceItem/ExperienceItem';

function MyResume(props) {
    return (
        <section className="p-my-resum" id="resume">
            <div className="title animated fadeInUp">
                <FaIdCard />
                <h2>My Resume</h2>
            </div>
            <Row>
                <Col>
                    <h3 className="animated fadeInUp">Education</h3>
                    <div className="education-details">
                        <EducationItem title="Frontend Development (React)" educationName="Appleseeds Academy & Microsoft" educationLink="https://www.appleseeds.org.il/" years="Feb 2021 - May 2021" description="WEB application Front End Development, Powered by Appleseeds Academy
                        292 hours of technological and practical training.
                        Main topics included: HTML5, CSS3, JavaScript, React, Bootstrap,
                        Including a final project: https://talsba.github.io/Tor" />
                        <EducationItem title="BSc Computer Science" educationName="Netanya Academic College" educationLink="https://www.netanya.ac.il/" years="2013 - 2016" description="Final Project (final score 98): Developing 3D content for the Oculus Helmet using Unity & C#. Working in collaboration with TerraSafe company, while working directly with the company's CEO." />
                    </div>
                </Col>
                <Col>
                    <h3 className="animated fadeInUp">Work Experience</h3>
                    <div className="experience-details">
                        <ExperienceItem title="Fullstack Engineer" companyName="Meitav Dash" companyLink="https://www.meitavdash.co.il/?&ref=google&network=g&campaignid=10362107186&adgroupid=108792767691&feeditemid=&keyword=%D7%9E%D7%99%D7%98%D7%91%20%D7%93%D7%A9&matchtype=e&creative=443826218370&adposition=&device=c&devicemodel=&placement=&target=&gclid=CjwKCAjwo8-SBhAlEiwAopc9W-Icj5EkrcDxFjZc7o223ASz2yxX73JSayhLTDkIqwbRO2xaT-opjxoCmZoQAvD_BwE&gclsrc=aw.ds" years="2021 - Current" description="...
                    "/>
                    </div>
                    <div className="experience-details">
                        <ExperienceItem title="Software Engineer" companyName="Tomax" companyLink="https://tomaxltd.com" years="2017 - 2020" description="Designing and developing systems from scratch.
                    Support and maintenance of legasy code systems, detection and treatment of malfunctions.
                    C# desktop development in VS.
                    Developing a file management site using React & Vue JS, using VS Code environment.
                    Work directly with the company's CTO.
                    Developing desktop applications which used by most universities and colleges in Israel.
                    Working with C# .NET, VS, Winforms, Duplex Service, SQL, WCF, Web API, MySQL, HTML, AWS, Git, JIRA."/>
                    </div>
                </Col>

            </Row>
        </section>
    );
}

export default MyResume;