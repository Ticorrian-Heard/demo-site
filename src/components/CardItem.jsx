import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
  return (
    <>
        <li className='cards__item bg-white hover:bg-slate-300 active:bg-slate-500'>
          <Link className='cards__item__link' to={props.path} target="_blank">
              <figure className="cards__item__pic-wrap" data-category={props.label}>
                 <img src={props.src} alt="Bubbles" className="cards__item__img"/>
              </figure>
              <div className="cards__item__info">
                  <h5 className="cards__item__text">{props.text}</h5>
              </div>
          </Link>
        </li>
    </>
  )
}

export default CardItem