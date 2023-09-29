import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(click => !click);
  const closeMobileMenu = () => setClick(click => false);
  const  showButton = () => {
    if (window.innerWidth <= 960) {
        setButton(button => false);
    } else {
        setButton(button => true);
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                VideoSDK.Dev  <i class="fa-solid fa-video ml-2.5"></i>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Tips
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='https://github.com/zoom' className='nav-links' onClick={closeMobileMenu}>
                        GitHub
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='https://developers.zoom.us/docs/video-sdk/' target="_blank" className='nav-links' onClick={closeMobileMenu}>
                        Docs
                    </Link>
                    </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;