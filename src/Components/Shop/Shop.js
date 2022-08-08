import React from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    var mydata = require('../../fakeData/products.json');
    const [products, setProducts] = useState(mydata.slice(0, 10));
    const [cart,setCart] = useState([]);
    const handleAddproduct = (clickedproduct) => {
        const newCart = [...cart, clickedproduct];
        setCart(newCart);
    };
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(pd => <Product product={pd} handleAddproduct={handleAddproduct}>{pd.name}</Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;