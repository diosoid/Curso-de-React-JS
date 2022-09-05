
import'./App.css'
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Contacto from './components/Contacto/Contacto';
import Nosotros from './components/Nosotros/Nosotros';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



const App = () => {
  return (

    <div>

    <BrowserRouter>

      <Header/>

      <Routes>

        <Route path='/' element={ <ItemListContainer usuario1 = "Cosme Fulanito" correoElectronico= "callefalsa123@gmail.com"/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>

        <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='*' element={ <Navigate to="/" />} />
           
        
      </Routes>

      

      

      {/* <ItemListContainer usuario1 = "Cosme Fulanito" correoElectronico= "callefalsa123@gmail.com"/> */}

    </BrowserRouter>

    </div>
  );
}

export default App;
