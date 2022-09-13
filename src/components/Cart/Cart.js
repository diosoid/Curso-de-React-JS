import { useContext } from "react"
import { CartContext } from "../Context/CartContext"



const Cart = ( ) => {

    const {cart} = useContext(CartContext)

    return (

        <div className="container my-5">
            <h2>Carrito</h2>
                <hr/>

            {cart.map((item) => (

                <div key={item.id}>
                    <h3>{item.nombre}</h3>
                    <p>Precio: {item.valor}</p>
                    <p>Modelo: {item.modelo}</p>
                    
                    <p>cantidad: {item.cantidad}</p>
                    <small>Color: {item.color}</small>

                </div>

            ))}

        </div>

    )
}

export default Cart