/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';

const Cart = ({selectedActors, totalCost, remaining}) => {
    console.log(selectedActors)
    return (
        <div>
            <h4> this is card container</h4>
            <h4>Total Cost: {totalCost}</h4>
            <h4>Remaining: {remaining}</h4>
            {
                selectedActors.map(actor => (
                    <li key={actor.id}>{actor.name}</li>
                ))
            }
        </div>
    );
};

export default Cart;