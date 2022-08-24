
import'./App.css'
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';



//import { Navbar } from './components/NavBar'




const App = () => {
  return (
    <div>   
    <Header/>
    <ItemListContainer usuario1 = "Cosme Fulanito" correoElectronico= "callefalsa123@gmail.com"/>
    
    </div>
  );
}

export default App;
