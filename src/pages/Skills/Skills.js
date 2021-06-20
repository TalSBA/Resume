import React from 'react';
import { GiSkills } from "react-icons/gi";
import "./Skills.css";
import { Col, Row } from "react-bootstrap";
import SkillSection from '../../components/SkillSection/SkillSection';


function Skills(props) {
    return (
        <section className="p-skills">
            <div className="title animated fadeInUp">
                <GiSkills />
                <h2>Skills</h2>
            </div>
            <Row>
                <Col>
                    <h3 className="animated fadeInUp">Technical Skills</h3>
                    <div className="skills animated fadeInUp">
                        <div>
                            <SkillSection name="JavaScript" percentage="80%" />
                        </div>
                        <div>
                            <SkillSection name="HTML & CSS" percentage="75%" />
                        </div>
                        <div>
                            <SkillSection name="React" percentage="80%" />
                        </div>
                        <div>
                            <SkillSection name="C#/.Net/Web API" percentage="90%" />
                        </div>
                        <div>
                            <SkillSection name="MSSQL/SQL Managment Studio" percentage="70%" />
                        </div>
                        <div>
                            <SkillSection name="VUE JS" percentage="50%" />
                        </div>
                    </div>
                </Col>
                <Col>
                    <h3 className="animated fadeInUp">Professional Skills</h3>
                    <div className="skills animated fadeInUp">
                        <div>
                            <SkillSection name="Communication" percentage="80%" />
                        </div>
                        <div>
                            <SkillSection name="Teamwork" percentage="70%" />
                        </div>
                        <div>
                            <SkillSection name="Dedication" percentage="85%" />
                        </div>
                        <div>
                            <SkillSection name="Responsibility" percentage="95%" />
                        </div>
                        <div>
                            <SkillSection name="Creativity" percentage="75%" />
                        </div>
                    </div>
                </Col>
            </Row>
        </section>
    );
}

export default Skills;