import React from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Info from "../../components/Info/Info";
import Collapse from "../../components/Collapse/Collapse";
import "./style.scss";


const Logement = () => {
    const [currentLogement, setCurrentLogement] = useState()
    const images = currentLogement?.pictures ?? []

    const {id} = useParams();

    useEffect(() => {
        fetch("/logement.json")
        .then(response => response.json())
        .then(data => {
            const findDataId = data.find(item => item.id === id)
            // console.log(findDataId)
            setCurrentLogement(findDataId)
            // console.log(currentLogement)
        })
    }, [id]);



    return (
        <div>
            <Carrousel images={images} />
            <Info currentLogement={currentLogement} />
            <Collapse title={"Description"} description={currentLogement?.description}/>
            <Collapse title={"Équipements"} description={
                currentLogement?.equipments.map((equipment, index) => {
                    return <span key={index}>{equipment}</span>
            })}/>
        </div>
    )
}

export default Logement;