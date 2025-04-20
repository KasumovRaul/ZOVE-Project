import React from 'react'
import './HomeWomen.css'
import imgWomen from '../assets/women-kk.avif'
import AOS from 'aos';
import 'aos/dist/aos.css';
import  { useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomeWomen = () => {

  useEffect(()=>{
          AOS.init({
            duration: 1000,
            once:true
          })
        }, []);

  return (
    <div>
       <section>
               <div className="homeWomen-content fadeInUp" data-aow='fade-up'>
                 <div className="homeWomen-img">
                   <img src={imgWomen} alt="" />
                 </div>
                 <div className="HomeBoy-viewbtn">
                 <Link to='/fetchWomen'>
                   <button>View Menu</button>
                   </Link>
               </div>
              
               </div>
             </section>
    </div>
  )
}

export default HomeWomen