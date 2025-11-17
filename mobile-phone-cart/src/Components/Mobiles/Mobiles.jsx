import React, { use, useState } from 'react';
import Mobile from '../Mobile/Mobile';
import './Mobiles.css'

const Mobiles = ({ mobilePromise }) => {

    const mobiles = use(mobilePromise);

    const [buyPhone,setBuyPhone] = useState([]);

    const handleBuyMobiles = (mobile) => {
        const newBuyPhone = [...buyPhone,mobile];
        setBuyPhone(newBuyPhone);
    }

    return (
        <div>
            <h4>Mobile : {mobiles.length}</h4>
            <h3>added to cart : {buyPhone.length}</h3>
            <div className='mobiles-container'>
                {
                    mobiles.map(mobile => (
                        <Mobile
                            key={mobile.id}
                            handleBuyMobiles ={handleBuyMobiles}
                            mobile={mobile}>
                        </Mobile>
                    ))
                }
            </div>
        </div>
    );
};

export default Mobiles;