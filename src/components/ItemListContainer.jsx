import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import {customFetch, getProductByCategory} from "../utils/customFetch.js"
import ItemList from "./ItemList";
import * as ReactBootstrap from 'react-bootstrap';


const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState(false);

    const {category} = useParams();
    
    useEffect(() => {
        setLoading(true)
        if(!category) {
            customFetch()
            .then(response => {
                setItems(response)
            })
            .finally(() => {
                setLoading(false)
            })
        }else{
            getProductByCategory(category)
            .then(response => {
                setItems(response)
            })
            .finally(() => {
                setLoading(false)
            })
        }
    }, [category])

    return (
        <div className="row vertical-center">
            {loading ? <div className="load-items"> <ReactBootstrap.Spinner animation="border" variant="primary"/> </div> : <ItemList items={items} />}
        </div>
    )
}

export default ItemListContainer;
