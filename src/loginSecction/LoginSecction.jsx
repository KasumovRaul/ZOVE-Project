import React from 'react'
import ImgLogin from '../assets/nff_login.jpg'
import './LoginSecction.css'
import { Link } from 'react-router-dom'

const LoginSecction = () => {
  return (
    <div>
        <div className="login-layout">
          <div className="login-layout-container">
             <div className="login-layout-content-left">
                <div className="login-layout-929">
                    <h1>ENJOY THE BEST EXPERINCE</h1>
                </div>
                <div className="login-layout-930">
                    <h4>Lorem ipsum, dolor sit amet 
                    consectetur adipisicing elit. Tenetur, natus.</h4>
                </div>
                <div className="login-layout-btn-wrapper">
                    <Link to="/Enterlogin">
                    <button className="zds-btn-primary">LOGIN IN</button>
                    </Link>

                    <Link to="/createAccount">
                    <div className="zds-btn-secondary">REGISTER</div>
                    </Link>
                </div>
             </div>
                <div className="login-layout-content-right">
                    <div className="content-righ-img">
                        <img src={ImgLogin} alt="" />
                    </div>
                </div>
          </div>
        </div>
    </div>
  )
}

export default LoginSecction