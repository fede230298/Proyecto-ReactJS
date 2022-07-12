import React, {useContext} from 'react';
import {CartContext} from '../context/CartContext'
import { NavLink } from 'react-router-dom';

const CartWidget = () => {

    const {totalQuantity} = useContext(CartContext)

    return(
    <div>
        <NavLink to={"/cart"} className="text-orange"><i className="bi bi-cart2 nav-item"></i> {totalQuantity()}</NavLink>
    </div>
    )
}

export default CartWidget;