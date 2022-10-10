import {  useCartContext } from "../Context/CartContext"
/* import { BsFillTrashFill } from "react-icons/bs"; */
import { Link } from "react-router-dom";
import {Container, Button, Grid, Paper } from '@mui/material'
import { Box } from "@mui/system"
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';




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

    return (

        <Container maxWidth="xl">

            <Grid
             container
             direction="column"
             alignItems="center"
             justifyContent="center"
             sx={{ minHeight: "60vh" }}
             >
                <Grid item>
                <Paper sx={{ padding: "1.2em",  borderRadius: "0.5em"}}  >
                <Box>

                    <Container>


                    {cart.map((item) => (
                        
                        <Container key={item.id}>
                            <h2>Carrito</h2>
                            <hr/>
                            <h3>{item.nombre}</h3>
                            <p>Precio: {item.valor}</p>
                            <p>Modelo: {item.modelo}</p>                           
                            <p>Cantidad: {item.cantidad}</p>
                            <small>Color: {item.color}</small>
                            <button onClick={() => eliminarItem(item.id)} className=" mx-3 "><DeleteSweepIcon color="primary"/> </button>
                            <h4>Total: ${totalCarrito()}</h4>

                        </Container>

                    ))}

                    </Container>

                    {/* <button onClick={vaciarCarrito}  className="btn btn-danger my-2">Vaciar Carrito.</button> */}
                    <Button onClick={vaciarCarrito}  variant="contained" color="warning" aria-label="medium secondary button group">Vaciar Carrito. </Button>
                    <Link className="btn btn-success mx-3" to="/checkout" > Terminar mi compra</Link>

                </Box>
                </Paper>
                </Grid>      
        
            </Grid>

        </Container>
    )
}

export default Cart