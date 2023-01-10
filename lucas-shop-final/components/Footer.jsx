import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='footer-container'>
      {/*}
        <p>2022 Lucas Shop All rights reserved</p>
        <p>
            <AiFillInstagram />
            <AiOutlineTwitter />
        </p>
      */}
      <div className='footer-info'>
        <h3>Lucas Eliasson</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit proin massa ipsum.</p>
      </div>
      <div className='footer-list'>
        <h3>Handla</h3>
        <p><a href='#'>Klockor för honom</a></p>
        <p><a href='#'>Klockor för henner</a></p>
        <p><a href='#'>Kläder för honom</a></p>
      </div>
      <div className='footer-list'>
        <h3>Support</h3>
        <p><a href='#'>Frågor om frakt</a></p>
        <p><a href='#'>Kontakta oss</a></p>
        <p><a href='#'>FAQ</a></p>
        <p><a href='#'>Cookiepolicy</a></p>
      </div>
      <div>
        <h3>Betalmetoder</h3>
        <div className='payment-logos-container'>
          <div className='payment-logos-1'>
            {['PayPal.svg'].map((path, i) => {
              return(
                <img src={`/${path}.png`} alt='PayPal' key={i} width={128} height={34} layout='fixed' className='footer-logos'></img>
              )
            })}
            {['Visa'].map((path, i) => {
              return(
                <img src={`/${path}.png`} alt='Visa' key={i} width={105} height={34} layout='fixed' className='footer-logos'></img>
              )
            })}
            {['Mastercard'].map((path, i) => {
              return(
                <img src={`/${path}.png`} alt='Mastercard' key={i} width={44} height={34} layout='fixed' className='footer-logos'></img>
              )
            })}
            <div className='payment-logos-2'>
              {['American-express'].map((path, i) => {
                return(
                  <img src={`/${path}.png`} alt='American Express' key={i} width={120} height={68} layout='fixed' className='footer-logos'></img>
                )
              })}
              {['Klarna'].map((path, i) => {
                return(
                  <img src={`/${path}.png`} alt='Klarna' key={i} width={152} height={34} layout='fixed' className='footer-logos'></img>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer