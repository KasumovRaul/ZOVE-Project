import React from 'react'
import './HomeKids.css'
import imgKids from '../assets/two-children.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import  { useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomeKids = () => {

     useEffect(()=>{
        AOS.init({
          duration: 1000,
          once:true
        })
      }, []);

  return (
    <section>
      <div className="homeWomen-content fadeInUp" data-aow='fade-up'>
         <div className="homeWomen-img">
            <img src={imgKids} alt="" />
        </div>
      
        <div className="HomeBoy-viewbtn">
        <Link to='/fetchKids'>
            <button>View Menu</button>
            </Link>
           </div>
      </div>
    </section>
  )
}

export default HomeKids