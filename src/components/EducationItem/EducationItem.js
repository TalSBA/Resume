import React from 'react';
import "./EducationItem.css";

function EducationItem({title, educationName, educationLink, years, description}) {
    return (
        <div className="education-item animated fadeInUp">
            <h4>{title} From <a href={educationLink} target="_blank">{educationName}</a></h4>
            <div className="years">
                {years}
            </div>
            <p>{description}</p>
        </div>
    );
}

export default EducationItem;