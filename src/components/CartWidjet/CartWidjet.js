import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import './CartWidjet.css'

const CartWidjet = ( ) => {


  const {cartContent, cart} = useContext(CartContext)



    return (
      <Link to="/cart" className={`widget ${cart.length > 0 ? 'widget-visible' : ''}` } >
        <ShoppingCartIcon/>
        <span>{cartContent()}</span>
      
      </Link>
    );
  }
  
  export default CartWidjet;