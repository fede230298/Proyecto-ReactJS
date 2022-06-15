import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import {customFetch, getProductByCategory} from "../utils/customFetch.js"
import ItemList from "./ItemList";



const ItemListContainer = () => {
    const [items, setItems] = useState([])

    const {category} = useParams();
    
    useEffect(() => {
        if(!category) {
            customFetch()
            .then(response => {setItems(response)})
        }else{
            getProductByCategory(category)
            .then(response => {setItems(response)})
        }
    }, [category])

    return (
        <div className="row">
            <ItemList products={items} />
        </div>
    )
}

export default ItemListContainer;
