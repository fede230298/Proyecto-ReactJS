import React from 'react'
import {Link} from 'react-router-dom'


export const Item = ({id, name, image, precio, stock}) => {
  return (
    <article className='card text-center col-3 margin-card justify-content-evenly'>
      <div className='card-body'>
        <h1>{name}</h1>
        <img className='product-image' src={image} alt={id} />
      </div>
      <div className='card-footer'>
        <p>${precio}</p>
        <p>Stock disponible {stock}</p>
        <Link to={`/item/${id}`} className='btn btn-warning'>Ver detalles</Link>
      </div>
    </article>
  )
}

export default Item;