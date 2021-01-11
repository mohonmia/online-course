import React from 'react';

const Cart = (props) => {
    const cart = props.cart.length
    console.log(props);
    let totalPrice = 0;
    for (let i = 0; i < props.cart.length; i++) {
        const element = props.cart[i].course_price;
        totalPrice = element + totalPrice;
    }
    return (
        <div>
            <h5>Course added: {cart}</h5>
            <h5>Total course fee: ${totalPrice.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;