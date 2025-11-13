import React, { useState } from 'react';
import './country.css'

const Country = ({ country }) => {
    const [Visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(true);

    }

    return (
        <div className='country'>
            <div>Name : {country.name.common}</div>
            <img src={country.flags.png} alt="" />
            <button onClick={handleVisited}>
                {Visited ? "Visited" : "Not visited"}
            </button>
        </div>
    );
};

export default Country;