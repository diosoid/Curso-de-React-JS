import './Header'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/dinoicon.png'
import Nav from 'react-bootstrap/Nav';
import CartWidjet from '../CartWidjet';


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
            <Nav.Link >Catalogo</Nav.Link>
            <Nav.Link >Visitenos</Nav.Link>
            <Nav.Link >Contacto</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default BrandExample;