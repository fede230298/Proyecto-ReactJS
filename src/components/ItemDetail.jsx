import React from 'react'
import ItemCount from './ItemCount'


export const ItemDetail = ({id, name, descripcion, image, precio, stock}) => {
  return (
    <div className='row justify-content-aorund text-center product-detail'>
      <span className='col-lg-4'>
        <img className='product-image' src={image} alt={id} />
      </span>
      <span className='col-lg-4'>
        <h1>{name}</h1>
        <p className='text-start'>{descripcion}</p>
        <h2 className='text-start'>${precio}</h2>
      </span>
      <span className='col-lg-4 product-detail vertical-center'>
        <div>
          <p>Stock disponible {stock}</p>
          <ItemCount stock={stock} initial={1}/>
        </div>
      </span>
    </div>
  )
}

export default ItemDetail;