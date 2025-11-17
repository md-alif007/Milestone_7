import React from 'react';
import './Mobile.css'

const Mobile = ({ mobile , handleBuyMobiles}) => {

    const { brand, model, color, storage, ram, price } = mobile;

    return (
        <div className='mobile-container'>
            <h3>Brand Name : {brand}</h3>
            <h3>Model Name : {model}</h3>
            <h3>Color Name : {color}</h3>
            <h3>Storage : {storage}</h3>
            <h3>Ram : {ram}</h3>
            <h3>Price : ${price}</h3>
            <button onClick={() => handleBuyMobiles(mobile)}>Buy Now</button>
        </div>
    );
};

export default Mobile;