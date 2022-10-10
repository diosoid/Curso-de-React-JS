import './Header'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/dinoicon.png'
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom'
import CartWidjet from '../CartWidjet/CartWidjet';
import { useLoginContext } from '../Context/LoginContext';



function BrandExample() {

  const {user, logout } = useLoginContext()

  return (
    <>        
      <Navbar bg="dark" variant="dark" >
        <Container className="justify-content-center" >
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
                   
        </Container>
      </Navbar>

      <Navbar bg="success" variant="dark"  >
        <Container className="justify-content-center"  >

          <CartWidjet />    
          <Nav variant="light" >       
            {/* <Link className='nav-link' to='/Nosotros'>Nosotros</Link>
            <Link className='nav-link' to='/Contacto'>Contacto</Link> */} 
            <Container className={`widget ${user.logged  ? 'widget-visible' : ''}` }>Bienvenido: {user.user}</Container>
            <button  size="sm" onClick={logout} /* className='btn btn-outline-danger' */ className={`widget ${user.logged  ? 'widget-visible btn btn-primary'  : ''}` } >Logout</button>                          
          </Nav>                
        </Container>
      </Navbar>
      <Navbar bg="success" variant="dark"  >
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