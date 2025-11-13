import React from 'react';
import './country.css'



const Country = ({country}) => {
    // console.log(country.flags);

    const handleVisited = () => {
        console.log("Visited");
        
    }

    return (
        <div className='country'>
            <div>Name : {country.name.common}</div>
            <img src={country.flags.png} alt="" />
            <button onClick={handleVisited}>Not Visited</button>
        </div>
    );
};

export default Country;