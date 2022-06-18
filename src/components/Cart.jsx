import { Link } from "react-router-dom";

const Cart = () => {
    return (
        <div className="vertical-center">
            <h1>Carrito</h1>
            <Link to="/checkout">Finalizar la compra</Link>
        </div>
    )
}

export default Cart;