import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import { FooterBanner } from '../components'
import BottomInfo from './BottomInfo.jsx'

const Layout = ({ children, bannerData }) => {
  return (
    <div className='layout'>
        <Head>
            <title>Lucas Shop</title>
        </Head>
        <header>
            <Navbar />
        </header>
        <main className='main-container'>
            {children}
        </main>
        <FooterBanner footerBanner={bannerData && bannerData[0]} />
        <Footer />
        <BottomInfo />
    </div>
  )
}



export const getServerSideProps = async () => {
  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: { bannerData }
  }
}

export default Layout