import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({countriesPromise}) => {
    const countries = use(countriesPromise);
    console.log(countries);
    return (
        <div>
            <h1>Travelling countries : {countries.length}</h1>
            {
                countries.map(country => <Countries country ={country}></Countries>)
            }
        </div>
    );
};

export default Countries;
