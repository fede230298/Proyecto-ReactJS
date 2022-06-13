import React, { useEffect, useState } from "react"
import customFetch from "../utils/customFetch.js"
import producto from "../utils/producto.js"
import ItemDetailMap from "./ItemDetailMap"

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])

    useEffect(() => {
        customFetch(2000, producto)
        .then(a => setItem(a))
    }, [item])

    return (
        <div className="container">
            <div className="row">
                <ItemDetailMap products={item} />
            </div>
        </div>
    )
}

export default ItemDetailContainer;
