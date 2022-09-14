import {  createContext, useContext, useState } from "react";
import Swal from 'sweetalert2'

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addToCart = (item) => {
    //const newCart = cart.slice()
    //newCart.push(itemToCart)
    setCart([...cart, item])

    }

    const eliminarItem = (id) => {
        setCart(cart.filter((item) => item.id !== id ))

    }

    const isInCart = (id) => {
    return cart.some((item) => item.id === id)
    }
  

    const cartContent = () => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0 )
    }

    const totalCarrito =() => {
        return cart.reduce((acc, item) => acc + item.cantidad * item.valor, 0)
    }

    const vaciarCarrito = () => {

        Swal.fire({
            title: 'Esta seguro de que desea vaciar el carrito?',       
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si!'
          }).then((result) => {
            if (result.isConfirmed) {         
                setCart([])           
            }
          })     
    }




    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            cartContent,
            totalCarrito,
            vaciarCarrito,
            eliminarItem
          }}>

            {children}

        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}