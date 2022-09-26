import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useCartContext } from "../Context/CartContext"
import {addDoc, collection, doc, updateDoc, getDoc} from 'firebase/firestore'
import { db } from "../../FireBase/config"



const CheckOut = () => {
    
    const {cart, totalCarrito, finalizarCompra} = useCartContext()


    const [values, setValues ] = useState({
        nombre: '',
        email: '',
        direccion: '',
    })

    const handleInputChange = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value

        })

    }

    /* const handleNombre = (e) =>{
        setNombre(e.target.value)

    } */

    const handleSubmit = (e) =>{
        e.preventDefault()

        const orden = {

            comprador: values,
            items: cart,
            total: totalCarrito()

        }

        
        if(values.nombre.length < 2) {
            alert("Nombre incorrecto.")
            return
        } 
        
        if(values.email.length < 2) {
            alert("Email incorrecto.")
           return 
        }
        
        if(values.direccion.length < 2) {
            alert("Direccion incorrecta.")
            return 
        }

        cart.forEach((item) => {
            const docRef = doc(db, 'productos', item.id)

            getDoc (docRef)
                .then((doc) =>{

                    if(doc.data().cantidad >= item.cantidad) {

                        updateDoc(docRef, {
                            cantidad:  doc.data().cantidad - item.cantidad
                        })
                    } else {
                        alert ("No hay stock suficiente.")
                    }

                    
                })

        });

        const ordenesRef = collection(db, 'ordenes')
        addDoc(ordenesRef, orden)
            .then((doc) => {
                console.log(doc.id)
                finalizarCompra(doc.id)
            })


    }

    if(cart.length === 0 ) {
        return <Navigate to="/"/>
    }


    return (       
        <div className="container my-5">

            <h2> CheckOut </h2>
            <hr/>

            <form onSubmit={handleSubmit}>

                <input
                   name="nombre"                
                   onChange={handleInputChange}                  
                   value={values.nombre}
                   type={'text'}
                   className="form-control my-3"
                   placeholder="Tu nombre"
                />


                <input
                   name="email"
                   onChange={handleInputChange}
                   value={values.email}
                   type={'email'}
                   className="form-control my-3"
                   placeholder="Email"
                 />

                <input
                   name="direccion"
                   value={values.direccion}
                   onChange={handleInputChange}
                   type={'text'}
                   className="form-control my-3"
                   placeholder="Direccion"
                />

                <button type="submit" className="btn btn-primary">Enviar</button>


            </form>


        </div>   
    )
}

export default CheckOut