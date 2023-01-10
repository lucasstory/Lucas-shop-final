import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client.js'

function Product({ product: { image, name, brand, slug, price } }) {
  return (
    <div>
        <a href={`/product/${slug.current}`}>
            <div className='product-card'>
                <img src={urlFor(image && image[0])} className="product-image"></img>
                <div className='product-details-container'>
                  <p className='product-name'>{name}</p>
                  <p className='product-brand'>{brand}</p>
                  <p className='product-price'>{price}kr</p>
                </div>
                <div className='product-color'>
                  <p>H</p>
                </div>
            </div>
        </a>
    </div>
  )
}

export default Product