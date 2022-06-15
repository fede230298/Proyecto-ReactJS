import React, { useEffect, useState } from "react"
import {getProductById} from "../utils/customFetch.js"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const [item, setItem] = useState()

    const {id} = useParams();
    
    useEffect(() => {
        getProductById(parseInt(id))
        .then (response => {
            setItem(response)
        })
    }, [])

    return (
        <div className="container">
            <div className="row">
                <ItemDetail {...item} />
            </div>
        </div>
    )
}

export default ItemDetailContainer;
