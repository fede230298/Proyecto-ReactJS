import React from 'react'
import ItemCount from './ItemCount'
import { useState } from 'react';
import { Link } from 'react-router-dom';


export const ItemDetail = ({id, name, descripcion, image, precio, stock}) => {

  const [checked, setChecked] = useState(false);

  let cantidad;

  const onAdd = (cantidadSeleccionada) => {
    cantidad = cantidadSeleccionada
    setChecked(true)
    console.log(cantidad)
  }

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
          {checked ? <div><Link to={"/cart"}><button className='btn btn-warning'>Terminar compra</button></Link></div> : <ItemCount stock={stock} initial={1} onAdd={onAdd}/>}
        </div>
      </span>
    </div>
  )
}

export default ItemDetail;