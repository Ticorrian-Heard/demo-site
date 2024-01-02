import React, { useState, useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function Navbar() {
  const [click, setClick] = useState(false);
  const NavbarRef = useRef();
  const { height, width } = useWindowDimensions();

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
               <div className='icon-container mr-1.5'>
                 <svg className='svg-pos' width="40" height="40" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <mask id="mask0_1253_31" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0" y="3" width="16" height="10">
                   <path d="M11 11.5C11 12.3284 10.3284 13 9.5 13H3C1.3431 13 0 11.6569 0 10V4.5C0 3.6716 0.6716 3 1.5 3H8C9.6569 3 11 4.3431 11 6V11.5ZM14.7999 3.8999L12.5999 5.54991C12.2222 5.83321 11.9999 6.27781 11.9999 6.74991L12 9.24991C12 9.72201 12.2223 10.1666 12.6 10.4499L14.8 12.0999C15.2944 12.4707 16 12.1179 16 11.4999V4.49991C16 3.88181 15.2944 3.529 14.7999 3.8999Z" fill="#000001"/>
                   </mask><g mask="url(#mask0_1253_31)"><rect width="16" height="16" fill="#fff"/></g></svg>
                  </div>
                   <div className='logo-txt'>videosdk.dev</div>
               </Link>
            </div>
            <div className="logo-container">
               <button type="button" className="menu-icon" onClick={handleClick}>

                { click ? <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16" fill="none">
                             <mask id="mask0_8754_934" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
                             <path d="M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L6.58579 8L0.292893 14.2929C-0.0976311 14.6834 -0.0976311 15.3166 0.292893 15.7071C0.683417 16.0976 1.31658 16.0976 1.70711 15.7071L8 9.41421L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L9.41421 8L15.7071 1.70711C16.0976 1.31658 16.0976 0.683417 15.7071 0.292893C15.3166 -0.0976311 14.6834 -0.0976311 14.2929 0.292893L8 6.58579L1.70711 0.292893Z" fill="#000001"/>
                             </mask>
                             <g mask="url(#mask0_8754_934)">
                             <rect width="25" height="25" fill="#131619"/>
                             </g>
                             </svg> 
                        : <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512">
                           <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                           </svg> 
                        }
                </button>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <div className='nav-item-container'>
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
                  </div>
                  {click && width < 960 && <div className='nav-link2-container'>
                      <ul className='nav-link2-list'>
                       <li className='nav-link2'><Link to='https://support.zoom.com/hc' target="_blank">
                               Support
                           </Link></li>
                       <li className='nav-link2'><Link to='tel:1.888.799.9666'>
                               1.888.799.9666
                           </Link></li>
                       <li className='nav-link2'><Link className="btn btn--primary" to='https://zoom.us/signup' target="_blank">
                               Sign Up
                           </Link></li>
                     </ul>
                  </div> }
            </ul> 
            </div>
        </div>
    </nav>
  )
}

export default Navbar;