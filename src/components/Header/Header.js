import './Header'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/dinoicon.png'
import Nav from 'react-bootstrap/Nav';

import {Link} from 'react-router-dom'
import CartWidjet from '../CartWidjet/CartWidjet';




function BrandExample() {
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

          <Navbar.Brand > <CartWidjet/>    </Navbar.Brand>

          <Nav variant="light" >       
            <Link className='nav-link' to='/'>Catalogo</Link>
            <Link className='nav-link' to='/Nosotros'>Nosotros</Link>
            <Link className='nav-link' to='/Contacto'>Contacto</Link>         
          </Nav>      
          
        </Container>
      </Navbar>
      <Navbar bg="success" variant="dark"  >
        <Container className="justify-content-center" >
             
          <Nav  >
            <Nav.Link className='cat-link'>Categorias:</Nav.Link>   
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