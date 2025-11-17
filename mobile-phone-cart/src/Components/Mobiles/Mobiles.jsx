import React, { use } from 'react';
import Mobile from '../Mobile/Mobile';

const Mobiles = ({ mobilePromise }) => {

    const mobiles = use(mobilePromise)

    return (
        <div>
            <h4>Mobile : {mobiles.length}</h4>
            
        </div>
    );
};

export default Mobiles;