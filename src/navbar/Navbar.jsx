import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useBag } from '../BAGContext';
import { SlBag } from "react-icons/sl";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {bagItems} = useBag();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

      const closeMenu = () =>{
        setIsOpen(false)
      }

  return (
    <>
     <header className="header">
        <div className="header-container">
            <nav className={`header-nav ${isOpen ? 'active' : ''}`}>
                <div className="btn-menu" onClick={toggleMenu}>
                    <b>{ isOpen ? <FiX /> : <FiMenu />} Menu</b>
                </div>
                <Link to='/' onClick={closeMenu}>
                <div className="header-logo">
                    <h1>Z O V Ǝ</h1>
                </div>
                </Link>
                <div className="header-main">
                    <ul className="main-menu">
                        <Link to='/login' onClick={closeMenu}>
                        <li>Log in</li>
                        </Link>
                        {/* <Link to='/Locator' onClick={closeMenu}>
                        <li>Store Locator</li>
                        </Link> */}
                        <Link to='/bag' onClick={closeMenu}>
                        <li className='res-cl'>Shopping Bag [{ bagItems.length }]</li>
                        </Link>
                    </ul>
                </div>
                </nav>
                <Link to="/bag">
                <div className="res-bag">
                    <span><SlBag /></span>
                    <span className='res-count'>{bagItems.length}</span>
                </div>
                </Link>
          
        </div>
     </header>

    </>
  )
}

export default Navbar