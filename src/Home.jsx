import React from 'react'
import Navbar from './navbar/Navbar'
import HomeBoy from './homeBoy/HomeBoy'
import HomeWomen from './homeWomen/HomeWomen'
import HomeKids from './homeKids/HomeKids'

const Home = () => {
  return (
    <div>
       
        <HomeWomen/>
        <HomeBoy/>
        <HomeKids/>
    </div>
  )
}

export default Home