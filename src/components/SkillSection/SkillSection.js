import React from 'react';
import "./SkillSection.css";

function SkillSection({name, percentage}) {
    return (
        <div className="skill-section">
        <div className="parcial">
            <div className="info">
                <div className="name">{name}</div>
            </div>
            <div className="progressBar">
                <div className="percentage" style={{width: percentage}}>
                    <div className="percentage-number">{percentage}</div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default SkillSection;