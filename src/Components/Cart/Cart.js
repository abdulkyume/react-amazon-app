import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const totalprice = cart.reduce((total,prd)=> total + prd.price, 0);
    let productprice = Number(totalprice.toFixed(2));
    let shipping = 0;
    if (totalprice>350){
        shipping = 0;
    }
    else if (totalprice>150){
        shipping= 49.99;
    }
    else if (totalprice>0){
        shipping= 129.99;
    }
    const tax = (totalprice/10).toFixed(2);
    const grandtotal = (totalprice + shipping+ Number(tax)).toFixed(2);
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items  Ordered: {cart.length}</p>
            <p>Product Price: {productprice}</p>
            <p>Shiiping Cost: {shipping}</p>
            <p>Tax + VAT: {tax}</p>
            <p>Total Price: {grandtotal}</p>
        </div>
    );
};

export default Cart;