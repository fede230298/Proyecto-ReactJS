import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext";

const Cart = () => {

    const {cart, totalPrice, emptyCart, removeItem} = useContext(CartContext)


    if (cart.length === 0){
        return (
            <div>
                <div className="vertical-center">
                    <h3>Tu carrito está vacío</h3>
                </div>
                <div className="vertical-center">
                    <Link to={"/"} className="btn btn-warning">Volver al inicio</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="">
            <h1 className="vertical-center">Tu Carrito:</h1>
            <br />
            <div className="container">
                {
                    cart.map((item) => (
                        <div key={item.id} className="row cart-row col-12">
                            <img src={item.image} alt={item.name} className="col-3 cart-image vertical-center"/>
                            <h4 className="col-3 vertical-center">{item.name}</h4>
                            <p className="col-3 vertical-center">Cantidad: {item.cantidad}</p>
                            <h6 className="col-3 vertical-center">Precio: ${item.precio * item.cantidad}</h6>
                            <button onClick={() => removeItem(item.id)} className="btn btn-danger col cart-btn">Borrar</button>
                        </div>
                    ))
                }
            </div>
            <div className="container">
                <h4>Total: ${totalPrice()}</h4>

                <button onClick={emptyCart} className="btn btn-danger">Vaciar carrito</button>

                <Link to="/checkout" className="btn btn-success">Ir al Checkout</Link>
            </div>
        </div>
    )
}

export default Cart;