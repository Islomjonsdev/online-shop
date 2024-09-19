import React from 'react'
import Category from '../../components/Category/Category'
import Hero from '../../components/Hero/Hero'
import Products from '../../components/Products/Products'

const Home = () => {
  return (
    <main>
        <Hero />
        <Category />
        <Products />
    </main>
  )
}

export default Home