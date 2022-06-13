import React from 'react'
import ItemCount from './ItemCount'


export const Item = ({id, name, descripcion, image, stock}) => {
  return (
    <div className='card text-center col-3 margin-card justify-content-evenly'>
      <div className='card-body'>
        <h1>{name}</h1>
        {/* <p>{descripcion}</p> */}
        <img className='product-image' src={image} alt={id} />
      </div>
      <div className='card-footer'>
        <p>Stock disponible {stock}</p>
        <ItemCount stock={stock} initial={1}/>
      </div>
    </div>
  )
}

export default Item;