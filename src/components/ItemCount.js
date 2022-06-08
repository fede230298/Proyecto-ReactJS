import { useEffect, useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [contador, setContador] = useState(initial)

    useEffect(()=>{
        console.log("Hola");
    },[])

    onAdd = () =>{
        console.log(contador);
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
                
                <p><button onClick={disminuirContador}>-</button> Carrito: {contador} <button onClick={aumentarContador}>+</button></p>
                <button onClick={onAdd}>Confirmar</button>
                
            </div>
        )
    }

    if (stock == 0){
        return(
            <div className="d-inline-block">
                
                <p><button>-</button> Sin Stock <button>+</button></p>
                <button>Confirmar</button>
                
            </div>
        )
    }


}

export default ItemCount;