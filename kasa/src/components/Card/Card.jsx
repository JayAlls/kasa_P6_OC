import React from "react";
import "./style.scss";


function Card({id, cover, title}) {
    
    return (
        <div key={id} className="cards">
            <img src={cover} alt={title} />
            <p>{title}</p>
        </div>
    )
}

export default Card;