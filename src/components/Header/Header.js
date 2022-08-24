import './Header'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/dinoicon.png'
import Nav from 'react-bootstrap/Nav';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function BrandExample() {
  return (
    <>
      
     
      <Navbar bg="dark" variant="dark" >
        <Container className="justify-content-center" fill variant="tabs">
          <Navbar.Brand    href="#home">
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
        <Container className="justify-content-center" fill variant="tabs" defaultActiveKey="/home">
          <Navbar.Brand href="#home" ><ShoppingCartIcon/></Navbar.Brand>
          <Nav  >
            <Nav.Link href="#home">Catalogo</Nav.Link>
            <Nav.Link href="#features">Visitenos</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default BrandExample;