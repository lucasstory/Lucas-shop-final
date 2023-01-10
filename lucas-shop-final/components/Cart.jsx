import React, { useRef } from 'react'
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'
import toast from 'react-hot-toast'
import { useStateContext } from '../context/StateContext.js'
import { urlFor } from '../lib/client'
import getStripe from '../lib/getStripe';

const Cart = () => {
  const cartRef = useRef()
  const { totalPrice, totalQuantity, cartItem, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext()

  const handleCheckout = async () => {
    const stripe = await getStripe()

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + process.env.STRIPE_SECRET_KEY,
      },
      body: JSON.stringify(cartItem)
    })

    if (response.statusCode === 500) return

    const data = await response.json()

    toast.loading('Redirecting...')

    stripe.redirectToCheckout({ sessionId: data.id })
  }

  return (
    <div className='cart-wrapper' ref={cartRef}>
      <div className='cart-container'>
        <button type='button' className='cart-heading' onClick={ () => setShowCart(false) }>
          <AiOutlineLeft />
          <span className='heading'>Din kundvagn</span>
          <span className='cart-num-items'>({ totalQuantity } items)</span>
        </button>

        {cartItem.length < 1 && (
          <div className='empty-cart'>
            <AiOutlineShopping size={150} />
            <h3>Din kundvagn är tom</h3>
            <Link href='/'>
              <button type='button' className='btn' onClick={ () => setShowCart(false) }>Fortsätt handla</button>
            </Link>
          </div>
        )}

        <div className='product-container'>
          {cartItem.length > 0 && cartItem.map((item) => (
            <div className='product' key={item._id}>
              <img src={urlFor(item?.image[0])} className='cart-product-image'></img>
              <div className='item-desc'>
                <div className='flex top'>
                  <h5>{ item.name }</h5>
                  <h4>{ item.price } kr</h4>
                </div>
                <div className='flex bottom'>
                  <div>
                    <p className='quantity-desc'>
                      <button className='minus' onClick={() => toggleCartItemQuantity(item._id, 'dec')}><AiOutlineMinus /></button>
                      <span className='num'>{item.quantity}</span>
                      <button className='plus' onClick={() => toggleCartItemQuantity(item._id, 'inc')}><AiOutlinePlus /></button>
                    </p>
                  </div>
                  <button type='button' className='remove-item' onClick={() => onRemove(item)}>
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItem.length > 0 && (
          <div className='cart-bottom'>
            <div className='total'>
              <h3>Totalt</h3>
              <h3>{totalPrice} kr</h3>
            </div>
            <div className='btn-container'>
              <button type='button' className='btn' onClick={handleCheckout}>Gå till betalning</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart