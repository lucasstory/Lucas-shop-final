import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs'

import { useStateContext } from '../context/StateContext'

const Success = () => {
    const { setCartItem, setTotalPrice, setTotalQuantity } = useStateContext()

    useEffect(() => {
        localStorage.clear()
        setCartItem([])
        setTotalPrice(0)
        setTotalQuantity(0)
    }, [])

    return (
        <div className='success-wrapper'>
            <div className='success'>
                <p className='icon'>
                    <BsBagCheckFill />
                </p>
                <h2>Tack för din beställning!</h2>
                <p className='email-msg'>Check your email for recepit</p>
                <p className='description'>
                    If you have any questions, please email: 
                    <a className='email' href='mailto:order@example.com'>order@example.com</a>
                </p>
                <Link href="/">
                    <button type='button' width="300px" className='btn'>
                        Fortsätt handla
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Success