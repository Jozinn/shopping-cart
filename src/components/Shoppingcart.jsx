import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Product from './Product';

function Shoppingcart() {
    const [totalProducts, setTotalProducts] = useState(0);
    const addToCart = n => setTotalProducts(totalProducts + Number(n));

    return (
    <div>
        <p> {totalProducts} </p>
        <Product name='someProduct' addCart={addToCart} />
        <button type='button'>Checkout</button>
        <Link to='/'>Back to homepage</Link>
    </div>
  )
}

export default Shoppingcart