import React from "react";
import stars from "../../assets/stars.svg"
import starsColor from "../../assets/starsColor.svg"
import "./style.scss"

const Stars = ({rating}) => {

    return (
        <div className="stars">
            <img src={rating >= 1 ? starsColor : stars} alt="Stars 1" />
            <img src={rating >= 2 ? starsColor : stars} alt="Stars 2" />
            <img src={rating >= 3 ? starsColor : stars} alt="Stars 3" />
            <img src={rating >= 4 ? starsColor : stars} alt="Stars 4" />
            <img src={rating >= 5 ? starsColor : stars} alt="Stars 5" />
        </div>
    )
}

export default Stars;