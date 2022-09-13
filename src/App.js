
import'./App.css'
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Contacto from './components/Contacto/Contacto';
import Nosotros from './components/Nosotros/Nosotros';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContext } from './components/Context/CartContext';
import { useState } from 'react';
import Cart from './components/Cart/Cart';



const App = () => {

  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    //const newCart = cart.slice()
    //newCart.push(itemToCart)
    setCart([...cart, item])

  }

  const isInCart = (id) => {
    return cart.some((item) => item.id === id)
  }

  return (

    <CartContext.Provider value={{
      cart,
      addToCart,
      isInCart
    }} >


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

    

    </CartContext.Provider>

  );
}

export default App;
