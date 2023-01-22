import React from "react";
import { useState, useEffect } from "react";
import "./style.scss";
import Card from "../../components/Card/Card";


function Home() {
    const [logements, setLogements] = useState([]);
    useEffect(() =>{ 
        fetch("/logement.json")
        .then(data => data.json() )
        .then(data => setLogements(data))
        .catch(error => console.error(error))
    }, []);

    return (
        <main>
            <div className="banner">
                <p>Chez vous, partout et ailleurs</p>
            </div>
            <div className="card-container">
                {logements.map(({id, cover, title}) => (
                    <Card 
                    key={id}
                    id={id}
                    cover={cover}
                    title={title} 
                    />
                ))}
            </div>
        </main>
    )
}

export default Home;