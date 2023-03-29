import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const cart = props.cart; // option 01
    // const {cart }  = props; // option 02

    console.log(cart);

    // PRICE TOTAL = CLASS - 2
    let totalPrice = 0;
    // TOTAL SHIPPING = CLASS - 3
    let totalShipping = 0;
    for(const product of cart){
        totalPrice = totalPrice + product.price;

        // TOTAL SHIPPING = CLASS - 3
        totalShipping = totalShipping + product.shipping;
    }
    // TXT CLASS = 3
    const tax = totalPrice*7/100;
     // GRANDTOTAL CLASS = 3
     const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: {totalPrice}</p>
            <p>Total Shipping: {totalShipping}</p>
            <p>Tax: ${tax.toFixed(0)}</p>
            <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;