import React, { useState, useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './SubNav.css';

function SubNav() {
  const [search, setSearch] = useState(false);
  const [text, setText] = useState('');
  const NavbarRef = useRef();

  const toggleSearch = () => {
    setSearch(search => !search);
    setText(text => '');
  };

  const change = (e) => {
    setText(text => e.target.value);
  };

  const ZoomSearch = (e) => {
    e.preventDefault();
    window.open('https://www.zoom.com/en/search/#q=' + text, "_blank", "noreferrer");
    toggleSearch();
  };

  return (
    <nav ref={NavbarRef} className="sub-navbar">
        <div className="nav-links-container">

                <ul className='sub-nav-menu'>

                <li className='sub-nav-item'>
                { search && <div className='search-container'>

                    <form onSubmit={ZoomSearch} style={{display: 'flex'}}>
                      <button className='search-btn-left' type="submit" style={{backgroundColor: (text.length > 0) ? '#0e72ed' : 'white'}}>
                             <svg focusable="false" enable-background="new 0 0 20 20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Search" class="search-svg" style={ {fill: (text.length > 0) ?'white' : 'black', height: '14px'} }>
                             <g>
                                <path class="coveo-magnifier-circle-svg" d="m8.368 16.736c-4.614 0-8.368-3.754-8.368-8.368s3.754-8.368 8.368-8.368 8.368 3.754 8.368 8.368-3.754 8.368-8.368 8.368m0-14.161c-3.195 0-5.793 2.599-5.793 5.793s2.599 5.793 5.793 5.793 5.793-2.599 5.793-5.793-2.599-5.793-5.793-5.793">
                            </path>
                            <path d="m18.713 20c-.329 0-.659-.126-.91-.377l-4.552-4.551c-.503-.503-.503-1.318 0-1.82.503-.503 1.318-.503 1.82 0l4.552 4.551c.503.503.503 1.318 0 1.82-.252.251-.581.377-.91.377">
                            </path>
                              </g>
                            </svg>
                        </button>
                        <input className='search-input' type="text" placeholder='Enter search here...' onChange={change} />
                        <button className='search-btn-right' onClick={toggleSearch}>
                            <svg focusable="false" enable-background="new 0 0 13 13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Clear" class="search-svg"  style={ {fill: 'black', height: '14px'} }>
                                <title>Clear</title>
                                <g fill="currentColor"><path d="m7.881 6.501 4.834-4.834c.38-.38.38-1.001 0-1.381s-1.001-.38-1.381 0l-4.834 4.834-4.834-4.835c-.38-.38-1.001-.38-1.381 0s-.38 1.001 0 1.381l4.834 4.834-4.834 4.834c-.38.38-.38 1.001 0 1.381s1.001.38 1.381 0l4.834-4.834 4.834 4.834c.38.38 1.001.38 1.381 0s .38-1.001 0-1.381z"></path>
                                </g></svg>
                        </button>
                        </form>
                    </div> }

                  { !search && <button className='sub-nav-links' onClick={toggleSearch}>
                    <span class="coveo-search-button">
                      <svg focusable="false" enable-background="new 0 0 20 20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Search" class="search-svg">
                        <g>
                            <path class="coveo-magnifier-circle-svg" d="m8.368 16.736c-4.614 0-8.368-3.754-8.368-8.368s3.754-8.368 8.368-8.368 8.368 3.754 8.368 8.368-3.754 8.368-8.368 8.368m0-14.161c-3.195 0-5.793 2.599-5.793 5.793s2.599 5.793 5.793 5.793 5.793-2.599 5.793-5.793-2.599-5.793-5.793-5.793">
                            </path>
                            <path d="m18.713 20c-.329 0-.659-.126-.91-.377l-4.552-4.551c-.503-.503-.503-1.318 0-1.82.503-.503 1.318-.503 1.82 0l4.552 4.551c.503.503.503 1.318 0 1.82-.252.251-.581.377-.91.377">
                            </path>
                        </g>
                      </svg>
                    </span>
                        Search
                    </button>  }                
                    </li>


                    <li className='sub-nav-item'>
                    <Link to='https://support.zoom.com/hc' target="_blank" className='sub-nav-links'>
                        Support
                    </Link>
                    </li>
                    <li className='sub-nav-item'>
                    <Link to='tel:1.888.799.9666' className='sub-nav-links'>
                        1.888.799.9666
                    </Link>
                    </li>
                    <li className='sub-nav-item sub-nav-links'>
                       <span>|</span>
                    </li>
                    <li className='sub-nav-item btn btn--primary' style={{height: '30px'}}>
                    <Link to='https://zoom.us/signup' target="_blank" className='sub-nav-links'>
                        Sign Up
                    </Link>
                    </li>
            </ul>
        </div>
    </nav>
  )
}

export default SubNav;