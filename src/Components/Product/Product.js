import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShippingFast } from '@fortawesome/free-solid-svg-icons'

const Product = (pd) => {
    console.log(pd.product)
    const { img, name, seller, price, stock } = pd.product;
    
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} alt={name} />
            </div>
            <div>
                <h4>{name}</h4>
                <h4 className='product-name'>
                    {pd.product.name}
                </h4>
                <br />
                <p><small>by:{seller}</small></p>
                <p>Price: ${price}</p>
                <p><small>Only {stock} left in Stock</small></p>
                <button onClick={()=>pd.handleAddproduct(pd.product)} className='addtocartbtn'><FontAwesomeIcon icon={faShippingFast} /> Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;