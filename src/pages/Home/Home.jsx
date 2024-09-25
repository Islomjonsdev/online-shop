import React from 'react'
import Category from '../../components/Category/Category'
import DiscountProducts from '../../components/DiscountProducts/DiscountProducts'
import Furniture from '../../components/Furniture/Furniture'
import Hero from '../../components/Hero/Hero'
import Products from '../../components/Products/Products'

const Home = () => {
  return (
    <main>
        <Hero />
        <Category />
        <Products />
        <DiscountProducts />
        <Furniture />
    </main>
  )
}

export default Home