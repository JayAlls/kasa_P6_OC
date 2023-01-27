import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";


function Card({id, cover, title}) {
    
    return (
        <Link to={`/:${id}`}>
            <div key={id} className="cards">
                <img src={cover} alt={title} />
                <p>{title}</p>
            </div>
        </Link>
    )
}

export default Card;