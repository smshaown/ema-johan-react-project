import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
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
        setCart(newCart);

        // class 51  --- 4 start -- 1
        addToDb(product.id)
    }

    // class 51 ---  4 step --2
    useEffect(() => {
        const storedCart = getShoppingCart();
        // console.log(storedCart);

        // class 51 ---  5 video
        // step 1: get id 
        for(const id in storedCart){
            // step 2 get quantity of the product //  state by using id
            const addedProduct = products.find(product => product.id === id);

            // set  3: get quantity of the product
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            console.log(addedProduct);
        }
    }, [products])

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
                <Cart cart={cart}></Cart>               
            </div>
        </div>
    );
};

export default Shop;