import React, {useContext, useState} from "react"
import { Navigate } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { db } from "../firebase/firebase"
import { collection, getDocs, addDoc, writeBatch, query, where, documentId } from "firebase/firestore"

const Checkout = () => {

    const {cart, totalPrice, emptyCart} = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        telefono: '',
        email: '',
        checkEmail: '',
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
            return
        }

        if (values.email.length < 5){
            setErrorCheck({
                email: "El email es inválido"})
            
        }

        if (values.email != values.checkEmail){
            setErrorCheck({
                checkEmail: "Las direcciones de email no coinciden"
            })
            return
        }

        if (values.direccion.length < 5) {
            setErrorCheck({
                direccion: "La direccion es inválida"})
            return
        }

        const timestamp = Date.now();
        const fecha = new Date(timestamp)

        const orden = {
            client: values,
            items: cart.map(({id, cantidad, name, precio}) => ({id, cantidad, name, precio})),
            time: fecha,
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
                    <h1 className="vertical-center">Gracias por su compra!</h1>
                    <img src="https://anpimarcos.com/wp-content/uploads/2020/08/gracias.png" alt="Gracias por su compra" className="center"/>
                    <h4 className="vertical-center">Su orden de compra es: {orderID}</h4>
                </div>
            )
        }

        if (cart.length === 0){
            return <Navigate to={"/"}/>
        }

        return (
            <div>
                <h2 className="vertical-center">Checkout</h2>
                <hr />

                <div className="container cart-row col-12">
                    <h3 className="col-12 vertical-center">Por favor, ingrese los siguientes datos para finalizar la compra:</h3>

                    <form onSubmit={handleSubmit}>
                        <div className="row align-items-center">
                            <div className="col-2">
                                <label htmlFor="nombre" className="col-form-laber">Nombre:</label>
                            </div>
                            <div className="col-auto">
                                <input type="text" value={values.nombre} name="nombre" onChange={handleInputChange} placeholder="Nombre" required/>
                            </div>
                            <div className="col-auto">
                                {errorCheck.nombre && <p className="form-text">{errorCheck.nombre}</p>}
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-2">
                                <label htmlFor="telefono" className="col-form-laber">Télefono:</label>
                            </div>
                            <div className="col-auto">
                                <input type="tel" value={values.telefono} name="telefono" onChange={handleInputChange} placeholder="Teléfono" required/>
                            </div>
                            <div className="col-auto">
                                {errorCheck.telefono && <p className="form-text">{errorCheck.telefono}</p>}
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-2">
                                <label htmlFor="direccion" className="col-form-laber">Dirección:</label>
                            </div>
                            <div className="col-auto">
                                <input type="text" value={values.direccion} name="direccion" onChange={handleInputChange} placeholder="Direccion" required/>
                            </div>
                            <div className="col-auto">
                                {errorCheck.direccion && <p className="form-text">{errorCheck.direccion}</p>}
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-2">
                                <label htmlFor="direccion" className="col-form-laber">Email:</label>
                            </div>
                            <div className="col-auto">
                                <input type="text" value={values.email} name="email" onChange={handleInputChange} placeholder="Email" required/>
                            </div>
                            <div className="col-auto">
                                {errorCheck.email && <p className="form-text">{errorCheck.email}</p>}
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-2">
                                <label htmlFor="direccion" className="col-form-laber">Repita email:</label>
                            </div>
                            <div className="col-auto">
                                <input type="text" value={values.checkEmail} name="checkEmail" onChange={handleInputChange} placeholder="Repita email" required/>
                            </div>
                            <div className="col-auto">
                                {errorCheck.checkEmail && <p className="form-text">{errorCheck.checkEmail}</p>}
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success">Enviar</button>
                    </form>
                </div>
                <div className="vertical-center">
                    <button onClick={emptyCart} className="btn btn-danger">Cancelar compra</button>
                </div>
            </div>
        )
    }


export default Checkout;