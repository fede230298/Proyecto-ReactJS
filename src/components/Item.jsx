import {Link} from 'react-router-dom'


export const Item = ({ item }) => {
  return (
    <article className='card text-center col-3 margin-card justify-content-evenly vertical-center'>
      <div className='card-body'>
        <h1>{item.name}</h1>
        <img className='product-image' src={item.image} alt={item.id} />
      </div>
      <div className='card-footer'>
        <p>${item.precio}</p>
        <p>Stock disponible {item.stock}</p>
        <Link to={`/item/${item.id}`} className='btn btn-warning'>Ver detalles</Link>
      </div>
    </article>
  )
}

export default Item;