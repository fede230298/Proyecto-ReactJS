import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [contador, setContador] = useState(initial)

    const confirmarContador = (e) => {
        onAdd(contador);
    }

    if (stock > 0){
        const aumentarContador = () => {
            console.log("aumentar contador")
            if (contador < stock){
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
                
                <p><button onClick={disminuirContador} className="btn btn-warning">-</button> Carrito: {contador} <button onClick={aumentarContador} className="btn btn-warning">+</button></p>
                <button onClick={confirmarContador} className="btn btn-warning">Confirmar</button>
                
            </div>
        )
    }

    if (stock === 0){
        return(
            <div className="d-inline-block">
                
                <p><button className="btn btn-warning">-</button> Sin Stock <button className="btn btn-warning">+</button></p>
                <button className="btn btn-warning">Confirmar</button>
                
            </div>
        )
    }


}

export default ItemCount;