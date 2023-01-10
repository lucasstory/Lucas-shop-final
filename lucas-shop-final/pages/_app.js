import React from 'react';
import ReactDOM from 'react-dom';

import { Layout } from '../components'

import '../styles/globals.css'

import { StateContext } from '../context/StateContext.js';
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
    <Layout>
      <Toaster />
      <Component {...pageProps} />
    </Layout>
  </StateContext>
  )
}
