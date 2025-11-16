import React from 'react';
import './Bottle.css';

const Bottle = ({ bottle, handleAddToCart }) => {

    const { img, name, price, stock } = bottle;

    return (
        <div className='card bottle'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h3>${price}</h3>
            <h3>Available : {stock}</h3>
            <button onClick={() => handleAddToCart(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;