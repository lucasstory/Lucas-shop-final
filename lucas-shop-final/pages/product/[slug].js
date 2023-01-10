import React, { useState } from 'react'
import { client, urlFor } from '../../lib/client'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar, AiOutlineShopping } from 'react-icons/ai'


import { Product } from '../../components'

import { useStateContext } from '../../context/StateContext.js'

const ProductDetails = ( { product, products } ) => {
    const { image, name, brand, sizeOne, sizeTwo, sizeThree, colorOne, colorTwo, colorThree, details, price } = product

    const [index, setIndex ] = useState(0)

    const { decQty, incQty, qty, onAdd } = useStateContext()

    const [size, setSize] = useState(0)

  return (
    <div>
        <div className='product-detail-container'>
            <div className='all-images-container'>
                <div className='image-container'>
                    <img src={urlFor(image && image[index])} width={600}></img>
                </div>
                <div className='small-images-container'>
                    {image?.map((item, i) => (
                        <img src={urlFor(item)} key={i} className={i === index ? 
                            'small-image selected-image' : 'small-image'} 
                            onMouseEnter={() => setIndex(i)}> 
                        </img>
                    ))}
                </div>
            </div>
            <div className='product-detail-desc'>
                <h1>{name}</h1>
                <h2>{brand}</h2>
                <p className='price'>{ price } kr</p>
                <p className='product-details'>{ details }</p>
                <div className='size'>
                    <label>Storlek</label>
                    <a href='#'>
                        <div className='sizebox'>{sizeOne}</div>
                    </a>
                    <a href='#'>
                        <div className='sizebox'>{sizeTwo}</div>
                    </a>
                    <a href='#'>
                        <div className='sizebox'>{sizeThree}</div>
                    </a>
                </div>
                <div className='color'>
                    <label>Färg</label>
                    <a href={`/product/beige-kappa`} style={ {backgroundColor: colorOne} }>
                        <div className='sizebox'></div>
                    </a>
                    <a href={`/product/navy-kappa`} style={{backgroundColor: colorTwo}}>
                        <div className='sizebox'></div>
                    </a>
                    <a href={`/product/gra-kappa`} style={{backgroundColor: colorThree}}>
                        <div className='sizebox'></div>
                    </a>
                </div>
                <div className='quantity'>
                    <h3>Antal</h3>
                    <p className='quantity-desc'>
                        <button className='minus' onClick={decQty}><AiOutlineMinus /></button>
                        <span className='num'>{qty}</span>
                        <button className='plus' onClick={incQty}><AiOutlinePlus /></button>
                    </p>
                </div>
                <div className='buttons'>
                    <button type='button' className='add-to-cart' onClick={() => onAdd(product, qty)}>Lägg i varukorg
                        <AiOutlineShopping size={36}/>
                    </button>
                </div>
            </div>
        </div>
        <div>
            <div className='details-button-container'>
                <button className='active-btn'>Om produkten</button>
                <button className='inactive-btn'>Specifikationer</button>
                <button className='inactive-btn'>Betalning och leverans</button>
            </div>
            <div className='showcased-info-desc'>
                <h3>Beskrivning</h3>
                <div className='showcased-info-active'>
                    <div className='showcased-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin massa ipsum, mattis nec nibh sit amet, auctor vehicula ante. Vivamus eget lorem sed arcu convallis auctor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin massa ipsum, mattis nec nibh sit amet, auctor vehicula ante. Vivamus eget lorem sed arcu convallis auctor.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin massa ipsum, mattis nec nibh sit amet, auctor vehicula ante. Vivamus eget lorem sed arcu convallis auctor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin massa ipsum, mattis nec nibh sit amet, auctor vehicula ante. Vivamus eget lorem sed arcu convallis auctor.</p>
                    </div>
                    <img src={urlFor(image && image[0])} width={200}></img>
                </div>
                <div className='warranty-desc'>
                    <h3>Garanti</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin massa ipsum, mattis nec nibh sit amet, auctor vehicula ante. Vivamus eget lorem sed arcu convallis auctor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin massa ipsum, mattis nec nibh sit amet, auctor vehicula ante. Vivamus eget lorem sed arcu convallis auctor.</p>
                </div>
            </div>      
        </div>
    </div>
  )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
      slug {
        current
      }
    }
    `;
  
    const products = await client.fetch(query);
  
    const paths = products.map((product) => ({
      params: { 
        slug: product.slug.current
      }
    }));
  
    return {
      paths,
      fallback: 'blocking'
    }
  }
  
  export const getStaticProps = async ({ params: { slug }}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]'
    
    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);
  
    console.log(product);
  
    return {
      props: { products, product }
    }
  }

export default ProductDetails