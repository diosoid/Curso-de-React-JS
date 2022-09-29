
import { Navigate } from "react-router-dom"
import { useCartContext } from "../Context/CartContext"
import { addDoc, collection,  getDocs, writeBatch, query, where, documentId } from 'firebase/firestore'
import { db } from "../../FireBase/config"
import { useForm } from "../../hooks/useForm"

const CheckOut = () => {
    
    const {cart, totalCarrito, finalizarCompra} = useCartContext()

    const {values, handleInputChange } = useForm({
        nombre: '',
        email: '',
        direccion: '',

    })

    const handleSubmit = async (e) =>{
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

        const batch = writeBatch(db)
        const ordenesRef = collection(db, 'ordenes')
        const productosRef = collection(db, 'productos')

        const q = query( productosRef, where(documentId(), 'in', cart.map (item => item.id ) ))
        
        const productos = await getDocs(q) 

        const outOfStock = []

        productos.docs.forEach((doc)=> {
            const itemInCart = cart.find(item => item.id === doc.id)

            if (doc.data().cantidad >= itemInCart.cantidad ) {
                batch.update(doc.ref, {
                    cantidad: doc.data().cantidad  - itemInCart.cantidad
                } ) 
            } else {
                outOfStock.push(itemInCart)
            }

        })

        if (outOfStock.length === 0){
            batch.commit()
                .then((doc) => {

                    addDoc(ordenesRef, orden)
                      .then((doc) => {
                          console.log(doc.id)
                          finalizarCompra(doc.id)
                      }) 

                } )
        } else {
             alert( `Sin stock de: ${outOfStock[0].nombre} ${outOfStock[0].modelo}` )

             console.log(outOfStock)
        }
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