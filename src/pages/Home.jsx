import React from 'react'
import Hero from '../components/hero'
import Banner from '../components/Banner'
import Categoriesgrid from '../components/Categoriesgrid'
import Reviews from '../components/Reviews'
import Bestseller from '../components/Bestseller'
import Customercontact from '../components/Customercontact'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Banner/>
      <Categoriesgrid/>
      
      <Reviews/>
      <Bestseller/>
      <Customercontact/>
    </div>
  )
}

export default Home
