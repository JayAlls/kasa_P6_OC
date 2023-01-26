import React from "react";
import "./style.scss"
import logo from "../../../assets/whitelogo.svg"

const Footer = () => {
    return (
        <footer>
            <div className="logo">
                <img src={logo} alt="Kasa logo" />
            </div>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;