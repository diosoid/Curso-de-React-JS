import {  createContext, useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'
import { Navigate } from 'react-router-dom'

export const CartContext = createContext()

 const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(init)

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

    const userRegister = () => {

        Swal.fire({
            title: 'Se ha registrado con Exito',       
            icon: 'success',
            
            confirmButtonColor: '#3085d6',
           
            confirmButtonText: 'Si!'
          }).then((result) => {
            if (result.isConfirmed) {         
                <Navigate to="/" />
                        
            }
          })     
    }

    const finalizarCompra = (id) => {

        Swal.fire({
            title: 'Tu compra a sido enviada.',
            text: `Tu numero de orde es: ${id}`,       
            icon: `success`,
            
            confirmButtonColor: '#3085d6',
            
            confirmButtonText: 'Perfecto!'
          })
          setCart([])

    }

        useEffect(() => {
            localStorage.setItem('carrito', JSON.stringify(cart))
        }, [cart])



    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            cartContent,
            totalCarrito,
            vaciarCarrito,
            eliminarItem,
            finalizarCompra,
            userRegister
          }}>

            {children}

        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}