import React from 'react'
import Cards from '../../components/Cards/Cards'
import Category from '../../components/Category/Category'
import Hero from '../../components/Hero/Hero'
import Products from '../../components/Products/Products'

const Home = () => {
  return (
    <main>
        <Hero />
        <Category />
        <Products />
        <Cards />
    </main>
  )
}

export default Home