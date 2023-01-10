import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client.js'

const HeroBanner = ({ heroBanner }) => {
  return (
    <div>
      <div className='hero-banner-container'>
        <div className='hero-banner-text'>
          <h3>{heroBanner.midText}</h3>
          <p className='hero-banner-desc'>{heroBanner.desc}</p>
          <div>
            <Link href={`/product/${heroBanner.product}`}>
                <button type="button">{heroBanner.buttonText}</button>
            </Link>
        </div>
        </div>
        <img src={urlFor(heroBanner.image)} alt='Vinterkollektion' className='hero-banner-image'></img>
      </div>
      <hr></hr>
    </div>
  )
}

export default HeroBanner