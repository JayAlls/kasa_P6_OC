import React from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import { useParams } from "react-router-dom";


const Logement = () => {
    let {id} = useParams();

    // console.log(id)
    return (
        <div>
            <Carrousel objectId={id} />
        </div>
    )
}

export default Logement;