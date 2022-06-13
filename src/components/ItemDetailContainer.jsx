import React, { useEffect, useState } from "react"
import customFetch from "../utils/customFetch.js"
import productos from "../utils/productos.js"
import ItemDetailMap from "./ItemDetailMap"

const ItemDetailContainer = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        customFetch(2000, productos)
        .then(a => setItems(a))
    }, [items])

    return (
        <div className="container">
            <div className="row">
                <ItemDetailMap products={items} />
            </div>
        </div>
    )
}

export default ItemDetailContainer;
