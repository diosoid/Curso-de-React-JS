import './CartWidjet.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { useLoginContext } from '../Context/LoginContext';

const CartWidjet = ( ) => {


  const {cartContent, cart} = useContext(CartContext)
  const {user } = useLoginContext()



    return (
      <Link to="/cart" className={`widget ${cart.length > 0 && user.logged ? 'widget-visible' : ''}` } >
        <ShoppingCartIcon className='widget-visible '/>
        <span>{cartContent()}</span>
      
      </Link>
    );
  }
  
  export default CartWidjet;