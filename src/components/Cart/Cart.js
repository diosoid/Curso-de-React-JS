import {  useCartContext } from "../Context/CartContext"
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

/* import { useDarkMode } from "../Context/DarkModeContext"; */


const Cart = ( ) => {

    const {cart, totalCarrito, vaciarCarrito, eliminarItem} = useCartContext()

    if ( cart.length === 0 ) {
        return (
            <div className="container my-5">
                <h2> Tu carrito esta vacio.</h2>
                <Link to="/" className="btn btn-primary"   >Ir al catalogo.</Link>
            </div>
        )
    }

    /* const {darkMode} = useDarkMode()
    console.log(darkMode) */

    return (

        <div className="container my-5">
            
            <h2>Carrito</h2>
                <hr/>

            {cart.map((item) => (

                <div key={item.id}>
                    <h3>{item.nombre}</h3>
                    <p>Precio: {item.valor}</p>
                    <p>Modelo: {item.modelo}</p>
                    
                    <p>Cantidad: {item.cantidad}</p>
                    <small>Color: {item.color}</small>

                    <button onClick={() => eliminarItem(item.id)} className=" mx-2 btn btn-danger "><BsFillTrashFill/> </button>

                </div>

            ))}

            <h4>Total: ${totalCarrito()}</h4>
            <button onClick={vaciarCarrito}  className="btn btn-danger">Vaciar Carrito.</button>

        </div>

    )
}

export default Cart