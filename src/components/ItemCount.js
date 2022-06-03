import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [contador, setContador] = useState(initial)

    if (stock > 0){
        const aumentarContador = () => {
            console.log("aumentar contador")
            if (contador >= 0 && contador < stock){
                setContador(contador+1)
            }
        }
    
        const disminuirContador = () => {
            console.log("disminuir contador")
            if (contador > 0){
                setContador(contador-1)
            }
        }
        return(
            <div className="d-inline-block">
                
                <p><button onClick={disminuirContador}>-</button> Carrito: {contador} <button onClick={aumentarContador}>+</button></p>
                
            </div>
        )
    }

    if (stock == 0){
        return(
            <div className="d-inline-block">
                
                <p><button>-</button> Sin Stock <button>+</button></p>
                
            </div>
        )
    }


}

export default ItemCount