
import'./App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter } from 'react-router-dom'

import {  CartProvider } from './components/Context/CartContext';

import { LoginProvider, useLoginContext } from './components/Context/LoginContext';
import AppRouter from './router/AppRouter';
/* import {  DarkModeProvider } from './components/Context/DarkModeContext'; */



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
