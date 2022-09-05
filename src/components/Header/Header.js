import './Header'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/dinoicon.png'
import Nav from 'react-bootstrap/Nav';
import CartWidjet from '../CartWidjet';
import {Link} from 'react-router-dom'




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
          <Navbar.Brand ><CartWidjet/></Navbar.Brand>
          <Nav  >       
            <Link to='/'>Catalogo</Link>
            <Link to='/Nosotros'>Nosotros</Link>
            <Link to='/Contacto'>Contacto</Link>         
          </Nav>      
          



        </Container>
      </Navbar>
      <Navbar bg="success" variant="dark"  >
        <Container className="justify-content-center" >
             
          <Nav  >
               
            <Link to='/productos/parlantes'  >Parlantes</Link>
            <Link to='/productos/potencias' >Potencias</Link>
            <Link to='/productos/estereo' >Estereo</Link>         
          </Nav>
          
        </Container>
      </Navbar>

    </>
  );
}

export default BrandExample;