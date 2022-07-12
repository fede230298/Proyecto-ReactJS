import React from "react";

const ItemCount = ({stock, contador, setContador, onAdd}) => {

    if (stock > 0){
        const handlePlus = () => {
            if (contador < stock){
                setContador(contador+1)
            }
        }
    
        const handleMinus = () => {
            if (contador > 1){
                setContador(contador-1)
            }
        }
    
        return(
            <div className="d-inline-block">
                    
                <p><button onClick={handleMinus} className="btn btn-warning">-</button> Agregar: {contador} <button onClick={handlePlus} className="btn btn-warning">+</button></p>
                <button onClick={onAdd} className="btn btn-warning">Confirmar</button>
                    
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