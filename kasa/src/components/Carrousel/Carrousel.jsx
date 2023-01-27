import React from "react";
import { useState} from "react";

const Carrousel = ({images}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <div>
            <img src={images[currentIndex]} alt="Slide" />
            <button onClick={() => setCurrentIndex(currentIndex - 1)}>Précédent</button>
            <button onClick={() => setCurrentIndex(currentIndex + 1)}>Suivant</button>
        </div>
    );
}

export default Carrousel;