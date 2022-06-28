import React, { useContext } from 'react'
import ItemCount from './ItemCount'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../CartContext';


export const ItemDetail = ({ item }) => {
  
  const {addItem, isInCart} = useContext(CartContext)

  const [cantidad, setCantidad] = useState(1);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1)
  }

  const handleAdd = () => {
    const itemToCart = {
      ...item,
      cantidad
    }

    addItem(itemToCart)

    console.log(itemToCart);
  }

  return (
    <div className='row justify-content-aorund text-center product-detail'>
      <span className='col-lg-4'>
        <img className='product-image' src={item.image} alt={item.id} />
      </span>
      <span className='col-lg-4'>
        <h1>{item.name}</h1>
        <p className='text-start'>{item.descripcion}</p>
        <h2 className='text-start'>${item.precio}</h2>
      </span>
      <span className='col-lg-4 product-detail vertical-center'>
        <div>
          <p>Stock disponible {item.stock}</p>
          {isInCart(item.id) ? <div>Añadido : {cantidad} <br /><Link to={"/cart"}><button className='btn btn-warning'>Terminar compra</button></Link></div> : <ItemCount stock={item.stock} contador={cantidad} setContador={setCantidad} onAdd={handleAdd}/>}
        </div>
      </span>
      <button onClick={handleGoBack} className='btn btn-warning'>Volver</button>
    </div>
  )
}

export default ItemDetail;