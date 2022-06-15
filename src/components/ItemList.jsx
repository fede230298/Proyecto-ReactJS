import React from 'react'
import Item from './Item'


export const ItemList = ({products}) => {
  return (
    products.map(p =>
        <Item
        id={p.id}
        name={p.name}
        descripcion={p.descripcion}
        image={p.image}
        precio={p.precio}
        category={p.category}
        key={p.id}
        stock={p.stock}
        />
    )
  )
}

export default ItemList;