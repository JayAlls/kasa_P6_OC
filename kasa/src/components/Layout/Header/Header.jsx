import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import logo from "../../../assets/logo.svg"

function Header() {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="logo Kasa" />
            </div>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">À propos</Link>
            </nav>
        </header>
    )
}

export default Header;