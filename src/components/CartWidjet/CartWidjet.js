import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

const CartWidjet = ( ) => {


  const {cartContent} = useContext(CartContext)



    return (
      <Link to="/cart" >
        <ShoppingCartIcon/>
        <span>{cartContent()}</span>
      
      </Link>
    );
  }
  
  export default CartWidjet;