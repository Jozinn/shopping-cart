import React from 'react'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <div>
        <h1>Home Page</h1>
        <Link to='/cart'>Shopping cart</Link>
    </div>
  )
}

export default Homepage