import React from 'react';
import "./ExperienceItem.css";

function ExperienceItem({title, companyName, companyLink, years, description}) {
    return (
        <div className="experience-item animated fadeInUp">
            <h4>{title} From <a href={companyLink} target="_blank">{companyName}</a></h4>
            <div className="years">
                {years}
            </div>
            <p>{description}</p>
        </div>
    );
}

export default ExperienceItem;