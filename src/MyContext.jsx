import {React, createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    
    const addItem = (item) => {
        setCart([...cart, item])

    }

    const isInCart = (id) => {
        return cart.some((product) => product.id === id)
    }

    const totalPrice = () => {
        return cart.reduce((acc, product) => acc += (product.price * product.amount), 0)
    }

    const totalQuantity = () => {
        return cart.reduce((acc, product) => acc += product.amount, 0)
    }
    
    const emptyCart = () => {
        setCart([])
    }    

    const removeItem = (id) => {
        setCart( cart.filter((product) => product.id !== id))
    }
    
    return (
        <CartContext.Provider value={
            {
                cart,
                addItem,
                isInCart,
                totalPrice,
                totalQuantity,
                emptyCart,
                removeItem
            }
        }>
            {children}
        </CartContext.Provider>
    );
}