
import'./App.css'
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';









const App = () => {
  return (
    <BrowserRouter>

      
    <Header/>
     {/* <ItemDetailContainer item={1}/> */}
    <ItemListContainer usuario1 = "Cosme Fulanito" correoElectronico= "callefalsa123@gmail.com"/>
    
    
    
    </BrowserRouter>
  );
}

export default App;
