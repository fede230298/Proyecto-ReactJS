import React from 'react'
import ItemDetail from './ItemDetail';


export const ItemList = ({item}) => {
  return (
    item.map(i =>
        <ItemDetail
        key={i.id}
        item={i}
        /* id={p.id}
        name={p.name}
        descripcion={p.descripcion}
        image={p.image}
        precio={p.precio}
        key={p.id}
        stock={p.stock} */
        />
    )
  )
}

export default ItemList;