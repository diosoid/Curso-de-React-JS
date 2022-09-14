
import'./App.css'
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Contacto from './components/Contacto/Contacto';
import Nosotros from './components/Nosotros/Nosotros';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {  CartProvider } from './components/Context/CartContext';

import Cart from './components/Cart/Cart';
import {  DarkModeProvider } from './components/Context/DarkModeContext';



const App = () => {

  

  return (

    <CartProvider  >

      


      <BrowserRouter>

        <Header/>

        <Routes>

          <Route path='/' element={ <ItemListContainer usuario1 = "Cosme Fulanito" correoElectronico= "callefalsa123@gmail.com"/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>

          <Route path='/cart' element= {<Cart/>}/>
          <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/nosotros' element={<Nosotros/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='*' element={ <Navigate to="/" />} />
                    
        </Routes>

        {/* <ItemListContainer usuario1 = "Cosme Fulanito" correoElectronico= "callefalsa123@gmail.com"/> */}

      </BrowserRouter>

    
      
      

    </CartProvider>

  );
}

export default App;
