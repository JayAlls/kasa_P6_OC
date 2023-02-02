import React, {useEffect, useState} from "react";
import aboutbanner from "../../assets/aboutbanner.svg";
import aboutbannerMobile from "../../assets/aboutbannermobile.svg";
import "./style.scss";
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import { collapsis } from "./collapsis";

function About() {
    const [currentBanner, setBanner] = useState(aboutbanner);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 699) {
            setBanner(aboutbannerMobile);
          } else {
            setBanner(aboutbanner);
          }
        };
    
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, [setBanner]);
    
    return (
        <div className="about-container">
            <Banner banner={currentBanner} alt="About banner" />
            {collapsis.map((collapse, index) => (
                <Collapse key={index} title={collapse.title} description={collapse.description} />
            ))}
        </div>
    )
}

export default About;