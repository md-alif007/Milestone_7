import React from 'react';

const Country = ({country}) => {
    return (
        <div>
            <div>Name : {country.name.common}</div>
        </div>
    );
};

export default Country;