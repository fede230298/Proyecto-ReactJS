import React, { useEffect, useState } from "react"
import customFetch from "../utils/customFetch.js"
import productos from "../utils/productos.js"
import ItemList from "./ItemList";



const ItemListContainer = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        customFetch(2000, productos)
        .then(a => setItems(a))
    }, [items])

    return (
        <div className="row">
            <ItemList products={items} />
        </div>
    )
}

export default ItemListContainer;
