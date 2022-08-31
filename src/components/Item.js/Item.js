
import './Item.css'
import Contador from "../Contador"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';


const Item = ({producto}) => {
    return(

            <Container className="justify-content-center" >
            <Card style={{ width: '18rem' }} id="contenedor-productos" >

                <Card.Img variant="top" src={producto.img}  alt={producto.nombre} />
                <Card.Body >

                <Card.Title >{producto.nombre}: {producto.marca}</Card.Title>
                <Card.Text>
                 Modelo: {producto.modelo}
                </Card.Text>
                <Card.Text>
                 {producto.atributos}
                </Card.Text>
                <Card.Title><p>Precio: ${producto.valor}</p></Card.Title>
                
                <small>Stock: {producto.cantidad}</small>
                <p>{producto.descripcion}</p>
                <Contador/>
                <Button variant="primary">Agregar al carrito</Button>
                </Card.Body>

            </Card>
            </Container>
    )
}

export default Item




/*  function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.img}  alt={producto.nombre} />
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}  */

