import React, { useState, use } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'

const Bottles = ({ bottlesPromise }) => {

    const [cart , setCart] = useState([]);

    const bottles = use(bottlesPromise);

    const handleAddToCart = () => {

        console.log("Bottle will be added to cart");
    }

    return (
        <div>
            <h3>Bottles : {bottles.length}</h3>
            <div className = 'bottle-container'>
                {
                    bottles.map(bottle =>
                        <Bottle
                            key={bottle.id}
                            handleAddToCart ={handleAddToCart}
                            bottle={bottle}>
                        </Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;