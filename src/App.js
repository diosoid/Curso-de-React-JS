
import'./App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import {  CartProvider } from './components/Context/CartContext';
import { LoginProvider } from './components/Context/LoginContext';
import AppRouter from './router/AppRouter';




const App = () => {


  return (

    <LoginProvider>   
      <CartProvider  >

        <AppRouter/>

      </CartProvider>
    </LoginProvider>
  );
}

export default App;
