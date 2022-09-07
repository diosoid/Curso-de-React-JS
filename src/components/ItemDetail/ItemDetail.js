import Contador from "../Contador"
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './ItemDetail.css'
import { Container } from "@mui/system";


const ItemDetail = ({item}) => {

    return (


    <Container className='container'>
    <Card style={{ width: '18rem' }}  className="producto mx-auto">
      <Card.Img variant="top" src={item.img}  alt={item.nombre} />
      <Card.Body >
      <Card.Title className='Card-title' >
      {item.nombre}: {item.marca}
      </Card.Title>
      <Card.Text className='Card-title'>
      Modelo: {item.modelo}
      </Card.Text>
            
      <Card.Title className='Card-title'>
      {item.atributos}
      <p>Precio: ${item.valor}</p>              
      <small>Stock: {item.cantidad}</small>
      <p>{item.descripcion}</p>
      <Contador/>
      <Link to= {`/item/${item.id}`} className="btn btn-primary my-2" variant="primary">Agregar al carrito.</Link>
      </Card.Title> 
      </Card.Body>
    </Card>
    </Container>



        /* <div className="container my-5">
            <img src={item.img} alt={item.nombre}/>
            <h3>{item.nombre}</h3>
            <p>{item.atributos}</p>
            <p>{item.category}</p>
            <h4>Precio: ${item.valor}</h4>
        </div> */
    )
}

export default ItemDetail


    