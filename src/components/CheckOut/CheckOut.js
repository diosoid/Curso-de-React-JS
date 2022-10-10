
import { Navigate } from "react-router-dom"
import { useCartContext } from "../Context/CartContext"
import { addDoc, collection,  getDocs, writeBatch, query, where, documentId } from 'firebase/firestore'
import { db } from "../../FireBase/config"
import { useForm } from "../../hooks/useForm"
import {Container, Button, Grid, Paper, Typography, TextField } from '@mui/material'
import { Box } from "@mui/system"


const CheckOut = () => {
    
    const {cart, totalCarrito, finalizarCompra} = useCartContext()

    const {values, handleInputChange } = useForm({
        nombre: '',
        apellido:'',
        email: '',
        localidad:'',
        direccion: ''

    })

    const handleSubmit = async (e) =>{
        e.preventDefault()

        const orden = {

            comprador: values,
            items: cart,
            total: totalCarrito()

        }

        
        if(values.nombre.length < 2) {
            alert("Por favor ingrese un nombre valido.")
            return
        } 
        
        if(values.email.length < 2) {
            alert("El correo es incorrecto.")
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

        <Container maxWidth="xl">
            <Grid
             container
             direction="column"
             alignItems="center"
             justifyContent="center"
             sx={{ minHeight: "100vh" }}
             >
                <Grid item>

                    <Paper sx={{ padding: "1.2em",  borderRadius: "0.5em"}}  >

                        <Typography variant="h4" sx={{mt:1, mb: 1}}> Check Out.</Typography>

                        <Box onSubmit={handleSubmit} component="form">
                            
                            <TextField
                              name="nombre"                                              
                              margin="normal"
                              type={'text'}                                
                              fullWidth
                              label="Nombre"
                              sx={{mt:2, mb: 1.5}}
                              required
                              value={values.nombre}                              
                              onChange={handleInputChange}                                                                           
                              placeholder="Nombre"
                              />
                            <TextField
                              name="apellido"                                              
                              margin="normal"
                              type={'text'}                                
                              fullWidth
                              label="Apellido"
                              sx={{mt:2, mb: 1.5}}
                              required
                              value={values.apellido}                              
                              onChange={handleInputChange}                                                                           
                              placeholder="Apellido"
                              />
                            <TextField
                              name="email"                                              
                              margin="normal"
                              type={'email'}                                
                              fullWidth
                              label="Email"
                              sx={{mt:2, mb: 1.5}}
                              required
                              value={values.email}                              
                              onChange={handleInputChange}                                                                           
                              placeholder="Email"
                              />
                            <TextField
                              name="localidad"                                              
                              margin="normal"
                              type={'text'}                                
                              fullWidth
                              label="Localidad"
                              sx={{mt:2, mb: 1.5}}
                              required
                              value={values.localidad}                              
                              onChange={handleInputChange}                                                                           
                              placeholder="Localidad"
                              />
                            <TextField
                              name="direccion"                                              
                              margin="normal"
                              type={'text'}                                
                              fullWidth
                              label="Direccion"
                              sx={{mt:2, mb: 1.5}}
                              required
                              value={values.direccion}                              
                              onChange={handleInputChange}                                                                           
                              placeholder="Direccion"
                              />

                             

                            <Button type="submit"
                            fullWidth variant="contained"
                            sx={{mt:1.5, mb: 3}}                    
                            >Enviar. </Button>
                        </Box>
                    </Paper>
                </Grid>
           
            </Grid>
        </Container>



        /* <div className="container my-5">

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
                   name="apellido"                
                   onChange={handleInputChange}                  
                   value={values.apellido}
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
                   name="localidad"
                   onChange={handleInputChange}
                   value={values.localidad}
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
        </div>  */
    )
}

export default CheckOut