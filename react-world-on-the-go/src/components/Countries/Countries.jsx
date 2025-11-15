import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = ({ countriesPromise }) => {

    const[visitedCountries , setVisitedCountries] = useState([]);

    const countries = use(countriesPromise);

    const handleVisitedCountries = (country) => {
        console.log("Country visited added" , country);
    }
    
    return (
        <div>
            <h1>Travelling countries : {countries.length}</h1>
            <h3>Traveled so far : </h3>
            <div className='countries'>
                {
                    countries.map(country => (
                        <Country
                            key={country.name.common} 
                            country={country}
                            handleVisitedCountries ={handleVisitedCountries}>
                        </Country>
                    ))
                }
            </div>
        </div>
    );
};

export default Countries;
