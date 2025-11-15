import React, { useState } from 'react';
import './country.css'

const Country = ({ country }) => {
    const [Visited, setVisited] = useState(false)

    const handleVisited = () => {
        // if (Visited === true) {
        //     setVisited(false);
        // } else {
        //     setVisited(true);
        // }
        setVisited(!Visited);

    }

    return (
        <div className={`country ${Visited && `country-visited`}`}>
            <div>Name : {country.name.common}</div>
            <img src={country.flags.png} alt="" />
            <button onClick={handleVisited}>
                {Visited ? "Visited" : "Not visited"}
            </button>
        </div>
    );
};

export default Country;