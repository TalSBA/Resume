import React from 'react';
import "./ExperienceItem.css";

function ExperienceItem({title, companyName, companyLink, years, description}) {
    const descriptionArr = description.split('-')
    return (
        <div className="experience-item animated fadeInUp">
            <h4>{title} - <a href={companyLink} target="_blank">{companyName}</a></h4>
            <div className="years">
                {years}
            </div>
            {descriptionArr.map(desc =>{
                return <p>- {desc}</p>
            })}
            {/* <p>{description.replaceAll("-", "\n")}</p> */}
        </div>
    );
}

export default ExperienceItem;