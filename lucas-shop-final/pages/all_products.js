import React from 'react'

import { Product } from '../components'
import { client } from '../lib/client.js'

const all_products = ({ products }) => {
  return (
    <>
      <h2 className='all-products-title'>Du visar nu alla produkter</h2>
      <div className='all-products-container'>
        {products?.map((product) => <Product key={product._id} product={product}/>)}
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: { products, bannerData }
  }
}


export default all_products