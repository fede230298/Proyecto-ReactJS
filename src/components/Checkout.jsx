import React, {useContext, useState} from "react"
import { Navigate } from "react-router-dom"
import { CartContext } from "../CartContext"
import { db } from "../firebase"
import { collection, getDocs, addDoc, writeBatch, query, where, documentId } from "firebase/firestore"

const Checkout = () => {

    const {cart, totalPrice, emptyCart} = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        telefono: '',
        email: '',
        direccion: ''
    })

    const [orderID, setOrderID] = useState(undefined)

    const [errorCheck, setErrorCheck] = useState({})

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (values.nombre.length < 5){
            setErrorCheck({
                nombre: "El nombre es inválido o muy corto"
            })
            return
        }

        if (values.telefono.length < 5){
            setErrorCheck({
                telefono: "El número de contacto es inválido"})
        }

        if (values.email.length < 5){
            setErrorCheck({
                email: "El email es inválido"})
        }

        if (values.direccion.length < 5) {
            setErrorCheck({
                direccion: "La direccion es inválida"})
            return
        }

        const orden = {
            client: values,
            items: cart.map(({id, cantidad, name, precio}) => ({id, cantidad, name, precio})),
            total: totalPrice()
        }

        const batch = writeBatch(db)
        const productosRef = collection(db, "productos")
        const orderRef = collection(db, "orders")

        const q = query(productosRef, where(documentId(), "in", cart.map(el => el.id)))

        const productos = await getDocs(q)

        const outOfStock = []

        productos.docs.forEach((doc) => {
            const itemsToUpdate = cart.find(prod => prod.id === doc.id)
            if ((doc.data().stock - itemsToUpdate.cantidad) >= 0){
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemsToUpdate.cantidad
                })
            } else {
                outOfStock.push(itemsToUpdate)
            }
        })

        if (outOfStock.length === 0){
            addDoc(orderRef, orden)
                .then((doc) => {
                    batch.commit()
                    setOrderID(doc.id)
                    emptyCart()
                })
        } else {
            alert("Hay items sin stock!")
        }
    }

        if (orderID){
            return (
                <div>
                    <h1>Gracias por su compra!</h1>
                    <img src="https://anpimarcos.com/wp-content/uploads/2020/08/gracias.png" alt="Gracias por su compra" />
                    <h4>Su orden de compra es: {orderID}</h4>
                </div>
            )
        }

        if (cart.length === 0){
            return <Navigate to={"/"}/>
        }

        return (
            <div>
                <h2>CheckOut</h2>
                <hr />

                <form onSubmit={handleSubmit}>
                    <input type="text" value={values.nombre} name="nombre" onChange={handleInputChange} placeholder="Nombre" />
                    {errorCheck.nombre && <p>{errorCheck.nombre}</p>}
                    <input type="tel" value={values.telefono} name="telefono" onChange={handleInputChange} placeholder="Teléfono" />
                    {errorCheck.telefono && <p>{errorCheck.telefono}</p>}
                    <input type="text" value={values.direccion} name="direccion" onChange={handleInputChange} placeholder="Direccion" />
                    {errorCheck.direccion && <p>{errorCheck.direccion}</p>}
                    <input type="text" value={values.email} name="email" onChange={handleInputChange} placeholder="Email" />
                    <button type="submit" className="btn btn-warning">Enviar</button>
                </form>
                <button onClick={emptyCart} className="btn btn-danger">Cancelar compra</button>
            </div>
        )
    }


export default Checkout;