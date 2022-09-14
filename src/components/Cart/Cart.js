import {  useCartContext } from "../Context/CartContext"
import { BsFillTrashFill } from "react-icons/bs";
import { useDarkMode } from "../Context/DarkModeContext";


const Cart = ( ) => {

    const {cart, totalCarrito, vaciarCarrito, eliminarItem} = useCartContext()
    const {darkMode} = useDarkMode()

    console.log(darkMode)

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
                    <button onClick={() => eliminarItem(item.id)} className="btn btn-danger"><BsFillTrashFill/> </button>

                </div>

            ))}

            <h4>Total: ${totalCarrito()}</h4>
            <button onClick={vaciarCarrito}  className="btn btn-danger">Vaciar Carrito.</button>


        </div>

    )
}

export default Cart