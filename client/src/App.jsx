import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Result from './pages/Result'
import { loadStripe } from '@stripe/stripe-js'
import { CartProvider } from 'use-shopping-cart'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'

const stripePromise = loadStripe('stripe-client-key')

function App() {
  return (
    <CartProvider mode='checkout-session' stripe={stripePromise} currency='USD'>
      <BrowserRouter>
        <Navbar />
        <Toaster position='bottom-center' />
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/result' element={<Result />} />
          <Route path='/:productId' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
