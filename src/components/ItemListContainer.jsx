import React, { useEffect, useState } from "react"
import customFetch from "../utils/customFetch.js"
import productos from "../utils/productos.js"
import ItemList from "./ItemList";



const ItemListContainer = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        customFetch(1500, productos)
        .then(a => setItems(a))
    }, [items])

    return (
        <div className="row">
            <ItemList products={items} />
        </div>
    )
}

export default ItemListContainer;

{/* <div class="card text-center col-3">
            <div class="card-body">
                <h1>
                    Playstation 5 Standard
                </h1>
                <p>Consola PS5 edición física 825Gb</p>
                <img class="product-image" src="https://www.atajo.com.ar/images/0000PS5-STANDARD000459501PS5-STANDARD-Consola-Playstation-PS5-Standard-04.jpg"></img>
                
            </div>
            <div class="card-footer">
            <ItemCount stock={5} initial={1} onAdd={true}/>
            </div>
            
        </div> */}