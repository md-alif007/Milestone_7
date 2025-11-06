import React from 'react';

const Country = ({country}) => {
    // console.log(country.flags);
    return (
        <div>
            <div>Name : {country.name.common}</div>
            <img src={country.flags.png} alt="" />

        </div>
    );
};

export default Country;