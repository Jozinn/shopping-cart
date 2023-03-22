import React, { useState } from 'react'

function Product({ name, addCart }) {
    const [productsNumber, setProductsNumber] = useState(1);
    const addMore = () => setProductsNumber(productsNumber + 1);
    const addLess = () => setProductsNumber(productsNumber - 1);
    const changeNumber = n => setProductsNumber(n);

    return (
    <div>
        <h4> {name} </h4>
        <button onClick={addMore}>+</button>
        <input onInput={e => changeNumber(e.target.value)} type='number' />
        <button onClick={addLess}>-</button>
        <button onClick={() => addCart(productsNumber)}>Add to Cart</button>
    </div>
  )
}

export default Product