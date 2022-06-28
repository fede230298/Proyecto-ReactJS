import React, {useContext} from 'react';
import {CartContext} from '../CartContext'
import { NavLink } from 'react-router-dom';

const CartWidget = () => {

    const { cart, totalQuantity} = useContext(CartContext)

    if(cart.length)
    return(
    <div>
        <NavLink to={"/cart"}><i className="bi bi-cart2"></i> {totalQuantity()}</NavLink>
    </div>
    )
}

export default CartWidget;