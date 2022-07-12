import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {ItemDetail} from "./ItemDetail"
import { db } from '../firebase/firebase'
import {doc, getDoc} from 'firebase/firestore'
import {Loader} from '../utils/Loader'

const ItemDetailContainer = () => {

    const [item, setItem] = useState([])

    const [loading, setLoading] = useState(false);

    const {id} = useParams();
    
    useEffect(() => {
        setLoading(true)
        const docRef = doc(db, "productos", id)
        getDoc(docRef)
            .then((res) => {
                setItem({id: docRef.id, ...res.data()})
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div className="container">
            <div className="row">
                { loading ?  <Loader /> : <ItemDetail item={item} />}
            </div>
        </div>
    )
}

export default ItemDetailContainer;
