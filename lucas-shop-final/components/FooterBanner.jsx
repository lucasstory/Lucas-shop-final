import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client.js'

const FooterBanner = ({ }) => {
  return (
    <div className='footer-banner-container' style={ {backgroundImage: "url(/community-bg.jpg"} }>
        <div className='banner-desc'>
            <h3>Gå med i kundklubben</h3>
            <p>Lorem ipsum Lorem ipsum  Lorem ipsum  Lorem ipsum Lorem ipsum  Lorem ipsum Lorem ipsum Lorem ipsum. </p>
            <div className='input-container'>
                <input placeholder='Skriv din e-post adress' className='banner-input'></input>
                <Link href=''>
                    <button type='button'>Gå med</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default FooterBanner