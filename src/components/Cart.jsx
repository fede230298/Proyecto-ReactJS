import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext";

const Cart = () => {

    const {cart, totalPrice, emptyCart, removeItem} = useContext(CartContext)


    if (cart.length === 0){
        return (
            <div>
                <h3>Tu carrito está vacío</h3>
                <Link to={"/"} className="btn btn-warning">Volver al inicio</Link>
            </div>
        )
    }

    return (
        <div className="vertical-center">
            <h1>Tu Carrito:</h1>
            <br />
            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h4>{item.name}</h4>
                        <img src={item.image} alt={item.name} />
                        <p>Cantidad: {item.cantidad}</p>
                        <h6>Precio: ${item.precio * item.cantidad}</h6>
                        <button onClick={() => removeItem(item.id)} className="btn btn-danger">Borrar</button>
                    </div>
                ))
            }
            
            <h4>Total: ${totalPrice()}</h4>

            <button onClick={emptyCart} className="btn btn-danger">Vaciar carrito</button>

            <Link to="/checkout">Finalizar la compra</Link>
        </div>
    )
}

export default Cart;

/*<form onSubmit={handleSubmit}>
<div>
<input onChange={handleNameChange} type="text" id="name" placeholder="Name..." value={user.name} />
</div>
<div>
<input onChange={handleEmailChange} type="text" id="email" placeholder="Email..." value={user.email} />
</div>
<div>
<input onChange={handleTelChange} type="text" id="tel" placeholder="Telephone..." value={user.tel} />
</div>
<button onClick={handleClick}>Comprar</button>
</form>*/