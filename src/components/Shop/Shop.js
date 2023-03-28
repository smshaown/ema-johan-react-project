import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    // class -- 7
    const [cart, setCart] = useState([])


    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    // class - 7
    // const handleAddToCart = (product) => {
    //     const newCart = [...cart, product];
    //     setCart(newCart)
    // }

    // class =  6 - 7
    const handleAddToCart = (product) => {
        // console.log(product)
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
               {products.map(product => <Product 
               key={product.id} product={product}               
               handleAddToCart={handleAddToCart}
               >              
                
               </Product>)}
            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
                <p>Selected IT ems: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;