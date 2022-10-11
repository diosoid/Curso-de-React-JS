import './Header'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/dinoicon.png'
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom'
import CartWidjet from '../CartWidjet/CartWidjet';
import { useLoginContext } from '../Context/LoginContext';
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';




function BrandExample() {

  const {user, logout } = useLoginContext()
  const {cart} = useContext(CartContext)

  return (
    <>        
      <Navbar bg="dark" variant="dark" >
        <Container className="justify-content-center" >

            <Link class='nav-link text-light bg-dark'   to='/Nosotros'>Nosotros</Link>
          <Navbar.Brand >
              <img
              alt=""
              src={logo}
              width="80"
              height="60"
              className="d-inline-block align-center"             
              />
              {'DinaSound'}                
          </Navbar.Brand>
            <Link class='nav-link text-light bg-dark' to='/Contacto'>Contacto</Link> 
                   
        </Container>
      </Navbar>

      <Navbar bg="success" variant="dark"  className={`widget ${cart.length && user.logged > 0 ? 'widget-visible' : ''}` }>
        <Container className="justify-content-center"  >

          <CartWidjet />    
          <Nav variant="light" >       
            <Container className={`widget ${user.logged  ? 'widget-visible' : ''}` }>Bienvenido: {user.user}</Container>
            <button  size="sm" onClick={logout} /* className='btn btn-outline-danger' */ className={`widget ${user.logged  ? 'widget-visible btn btn-primary'  : ''}` } >Logout</button>                          
          </Nav>                
        </Container>
      </Navbar>
      <Navbar bg="success" variant="dark"  className={`widget ${cart.length && user.logged > 0 ? 'widget-visible' : ''}` }>
        <Container className="justify-content-center" >             
          <Nav  >
             
            <Link className='nav-link' to='/'>Catalogo</Link>
            <Link className='nav-link'   to='/productos/parlantes'  >Parlantes</Link>
            <Link className='nav-link' to='/productos/potencias' >Potencias</Link>
            <Link className='nav-link' to='/productos/estereo' >Estereo</Link>
                                
          </Nav>          
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;