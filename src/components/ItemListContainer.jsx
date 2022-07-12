import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { db } from '../firebase/firebase'
import { getDocs, query, where, collection } from "firebase/firestore";
import { Loader } from '../utils/Loader';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState(false);

    const {category} = useParams();
    
    useEffect(() => {

        setLoading(true)

        const collectionProductos = collection(db, "productos")

        const consulta = category ? query(collectionProductos, where("category", "==", category)) : collectionProductos
        getDocs(consulta)
            .then((result) => {
                const productosArray = result.docs.map(ref => {
                    return {
                        id: ref.id,
                        ...ref.data()
                    }
                })
                setItems(productosArray)
                setLoading(false)
            })
            .finally(() => {

                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [category])

    return (
        <div className="row vertical-center">
            {loading ? <Loader /> : <ItemList items={items} />}
        </div>
    )
}

export default ItemListContainer;
