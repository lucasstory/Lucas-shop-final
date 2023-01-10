import React from 'react'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai'

import { Cart } from './'
import { useStateContext } from '../context/StateContext.js'

import all_products from '../pages/all_products'
import about from '../pages/about'

const Navbar = () => {
  const { showCart, setShowCart, totalQuantity } = useStateContext()

  return (
    <div>
    <div className='navbar-container'>
            <Link href="/" className='logo'>
            {['luceli-logo'].map((path, i) => {
                return(
                  <img src={`/${path}.png`} alt='Visa startsida' key={i} width={200} height={54} layout='fixed'></img>
                )
              })}
            </Link> 
        <div className='navbar-links'>
          <a href="/" className='navbar-links-item'>Nyheter</a>
          <a href="/all_products" className='navbar-links-item'>Se alla produkter</a>
          <a href="/about" className='navbar-links-item'>Om oss</a>
        </div>
        <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
            <AiOutlineShoppingCart />
            <span className='cart-item-qty'>{totalQuantity}</span>
        </button>
        { showCart && <Cart />}
    </div>
    <hr style={{width: "100%", maxWidth: "1920px", margin: "0 auto"}}></hr>
    </div>
  )
}

export default Navbar