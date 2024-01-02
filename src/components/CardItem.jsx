import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
  return (
    <>
        <li className='cards__item bg-white active:bg-slate-200'>
          <Link className='cards__item__link' to={props.path} target="_blank">
              <figure className="cards__item__pic-wrap" data-category={props.label}>
                 <img src={props.src} alt={props.label} className="cards__item__img"/>
              </figure>
              <div className="cards__item__info">
                  <h5 className="cards__item__text">{props.text}</h5>
              </div>
               <div className='demo-btn-container'>
                  <span className="demo-btn">
                    Demo
                  </span> 

                  <div className='demo-arrow'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="17" viewBox="0 0 9 17" fill="none">
                      <path d="M0.74622 0.0649414L7.35185 6.67057C8.34681 7.66553 8.3468 9.27867 7.35185 10.2736L0.746219 3.66801C-0.248741 2.67305 -0.248739 1.0599 0.74622 0.0649414Z" fill="#0B5CFF"/>
                      <path d="M0.74622 16.9349L7.35185 10.3293C8.34681 9.33435 8.3468 7.7212 7.35185 6.72624L0.746219 13.3319C-0.248741 14.3268 -0.248739 15.94 0.74622 16.9349Z" fill="#0B5CFF"/>
                    </svg>
                  </div>
                </div> 
          </Link>
        </li>
    </>
  )
}

export default CardItem