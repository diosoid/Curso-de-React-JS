import Header from '../components/Header/Header'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import Contacto from '../components/Contacto/Contacto';
import Nosotros from '../components/Nosotros/Nosotros';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Cart from '../components/Cart/Cart';
import {Routes, Route, Navigate } from 'react-router-dom'
import CheckOut from '../components/CheckOut/CheckOut';
/* import LoginSection from '../components/LoginSection/LoginSection'; */

const PrivateRoutes = () => {
    return (
        <>
            <Header/>
            <Routes>

            <Route path='/' element={ <ItemListContainer usuario1 = "Cosme Fulanito" correoElectronico= "callefalsa123@gmail.com"/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element= {<Cart/>}/>
            <Route path='/checkout' element= {<CheckOut/>}/>
            <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/nosotros' element={<Nosotros/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            {/* <Route path='/login' element={<LoginSection/>}/> */}
            <Route path='*' element={ <Navigate to="/" />} /> 
                        
            </Routes>              
        </>
    )
} 

export default PrivateRoutes