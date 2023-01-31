import React from "react";
import "./style.scss";
// import stars from "../../assets/stars.svg"
import Stars from "../Stars/Stars.jsx"


const Info = ({currentLogement}) => {
    if (!currentLogement) {
        return null;
    }
    const rating = currentLogement.rating
    const tags = currentLogement.tags
    // console.log(currentLogement)


    return (
        <div className="info-container">
            <div className="left-container">
                <h1>{currentLogement.title}</h1>
                <h3>{currentLogement.location}</h3>
                <div className="tags">
                    {tags.map((tag, index) => (
                        <p key={index}>{tag}</p>
                    ))}
                </div>
            </div>
            <div className="right-container">
                <div className="host">
                    <p>{currentLogement.host.name}</p>
                    <div>
                        <img src={currentLogement.host.picture} alt={`${currentLogement.host.name}`} />
                    </div>
                </div>
                <div className="stars">
                    <Stars rating={rating}/>
                </div>
            </div>
        </div>
    )
}

export default Info;