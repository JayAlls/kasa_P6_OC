import React from "react";
import { useState, useEffect } from "react";
import "./style.scss";
import Card from "../../components/Card/Card";
import Banner from "../../components/Banner/Banner";
import banner from  "../../assets/banner.svg";
import "../../components/Banner/style.scss";



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
            <Banner banner={banner} alt="Home Banner" text="Chez vous, partout et ailleurs" />
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