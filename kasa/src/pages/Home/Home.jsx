import React from "react";
import { useState, useEffect } from "react";
import "./style.scss";


function Home() {
    const [logements, setLogements] = useState([]);
    useEffect(() =>{ 
        fetch("/logement.json")
        .then(data => data.json() )
        .then(data => setLogements(data))
        .catch(error => console.error(error))
    }, []);

    return (
        <div className="banner">
            <p>Chez vous, partout et ailleurs</p>
        </div>
    )
}

export default Home;