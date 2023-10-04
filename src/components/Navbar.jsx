import React, { useState, useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const NavbarRef = useRef();

  const handleClick = () => { 
    setClick(click => !click);
  }

  const closeMobileMenu = () => {
    setClick(click => false)
  }

  useEffect(() => {
    NavbarRef.current.style.overflow = (NavbarRef.current.style.overflow === 'hidden') 
    ? "visible"
    : "hidden";
  }, [click]); 

  return (
    <nav ref={NavbarRef} className="navbar">
        <div className="navbar-container">
            <div className="logo-container fold-center-logo">
               <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
               <div className='icon-container mr-1.5 bg-blue-500'>
                 <svg className='svg-pos' width="40" height="40" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <mask id="mask0_1253_31" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0" y="3" width="16" height="10">
                   <path d="M11 11.5C11 12.3284 10.3284 13 9.5 13H3C1.3431 13 0 11.6569 0 10V4.5C0 3.6716 0.6716 3 1.5 3H8C9.6569 3 11 4.3431 11 6V11.5ZM14.7999 3.8999L12.5999 5.54991C12.2222 5.83321 11.9999 6.27781 11.9999 6.74991L12 9.24991C12 9.72201 12.2223 10.1666 12.6 10.4499L14.8 12.0999C15.2944 12.4707 16 12.1179 16 11.4999V4.49991C16 3.88181 15.2944 3.529 14.7999 3.8999Z" fill="#000001"/>
                   </mask><g mask="url(#mask0_1253_31)"><rect width="16" height="16" fill="#fff"/></g></svg>
                  </div>
                   <div>VideoSDK.Dev</div>
               </Link>
            </div>
            <div className="logo-container">
               <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='https://devforum.zoom.us/' target="_blank" className='nav-links' onClick={handleClick}>
                        Dev Forum
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='https://github.com/zoom' target="_blank" className='nav-links' onClick={handleClick}>
                        GitHub
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='https://developers.zoom.us/docs/video-sdk/' target="_blank" className='nav-links' onClick={handleClick}>
                        Docs
                    </Link>
                    </li>
            </ul> 
            </div>
        </div>
    </nav>
  )
}

export default Navbar;