import React, { useEffect, useState } from "react"
import {getProductById} from "../utils/customFetch.js"
import { useParams } from "react-router-dom"
import {ItemDetail} from "./ItemDetail"
import * as ReactBootstrap from 'react-bootstrap';

const ItemDetailContainer = () => {

    const [item, setItem] = useState([])

    const [loading, setLoading] = useState(false);

    const {id} = useParams();
    
    useEffect(() => {
        setLoading(true)
        getProductById(parseInt(id))
        .then (response => {
            setItem(response)
            setLoading(false)
        })
    }, [])

    return (
        <div className="container">
            <div className="row">
                { loading ?  <div className="load-items"> <ReactBootstrap.Spinner animation="border" variant="primary" /> </div> : <ItemDetail item={item} />}
            </div>
        </div>
    )
}

export default ItemDetailContainer;
