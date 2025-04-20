import React, { useEffect } from 'react'
import './HomeBoy.css'
import ImgBoy from '../assets/CMMN-SWDN.avif'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const HomeBoy = () => {

  useEffect(()=>{
    AOS.init({
      duration: 1000,
      once:true
    })
  }, []);

  return (
    <div>
       <section>
         <div className="homeBoy-content fadeInUp" data-aow='fade-up'>
           <div className="HomeBoy-img">
             <img src={ImgBoy} alt="" />
           </div>
      
           <div className="HomeBoy-viewbtn">
           <Link to='/fetchmen'>
            <button>View Menu</button>
            </Link>
           </div>
          
         </div>
       </section>
    </div>
  )
}

export default HomeBoy