import { useContext } from "react"
import { useForm } from "../../hooks/useForm"
import { LoginContext } from "../Context/LoginContext"
import {Container, Button, Grid, Paper, Typography, TextField } from '@mui/material'
import { Box } from "@mui/system"
 import { useCartContext } from "../Context/CartContext"

const LoginSection = () => {

    
    const {userRegister} = useCartContext()
    const {login } = useContext (LoginContext)
    const {values, handleInputChange } = useForm ({
        email: '',
        pass: '',
    })
    
    const handleSubmit = (e) => {
        e.preventDefault()
        login(values)     
    }

    /* console.log(user)  */
    
     
    
    return(

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

                        <Typography variant="h4" sx={{mt:1, mb: 1}}> Iniciar sesion.</Typography>

                        <Box onSubmit={handleSubmit} component="form">
                            
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
                              />
                            <TextField
                              name="pass"
                              type={'password'}
                              margin="normal"                           
                              fullWidth
                              label="Password"
                              sx={{mt:1.5, mb: 1.5}}
                              required
                              value={values.pass}
                              onChange={handleInputChange}                             
                              />

                            <Button  onClick={userRegister} type="submit"
                            fullWidth variant="contained"
                            sx={{mt:1.5, mb: 3}}                    
                            >Iniciar sesion.</Button>
                            
                        </Box>
                    </Paper>
                </Grid>
           
            </Grid>
        </Container>
        

                

        /* <div style={{backgroundcolor: 'lightgreen'}}>
            <form onSubmit={handleSubmit}   className="container my-4">                            
                <input
                    name="email"
                    type={'email'}
                    className='form-control'
                    value={values.email} 
                    onChange={handleInputChange}                   
                />
                <input
                    name="pass"
                    type={'pasword'}
                    className='form-control'
                    value={values.pass}
                    onChange={handleInputChange}
                />
                <button className="btn btn-primary" type="submit" > Ingresar. </button>               
            </form>
        </div> */
    )

    
}


export default LoginSection