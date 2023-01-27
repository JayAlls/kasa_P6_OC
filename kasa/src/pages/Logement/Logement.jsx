import React from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const Logement = () => {
    let { objectId } = useParams();
    const [images, setImages] = useState([]);
    useEffect(() => {
        fetch(`/logement.json`)
            .then(response => response.json())
            .then(data => {
                const currentObject = data.filter(object => object.id === objectId);
                setImages(currentObject[0].images);
            });
    }, [objectId]);
    return (
        <div>
            <Carrousel images={images} />
        </div>
    );
}

export default Logement;