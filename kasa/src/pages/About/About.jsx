import React from "react";
import aboutbanner from "../../assets/aboutbanner.svg";
import "./style.scss";
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import { collapsis } from "./collapsis";

function About() {
    return (
        <div className="about-container">
            <Banner banner={aboutbanner} alt="About banner" />
            {collapsis.map((collapse, index) => (
                <Collapse key={index} title={collapse.title} description={collapse.description} />
            ))}
        </div>
    )
}

export default About;