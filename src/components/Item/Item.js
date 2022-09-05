import './Item.css'
import Contador from "../Contador"

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



const Item = ({producto}) => {
    return(

           
      
      <Card style={{ width: '18rem' }}  id="producto">
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
      <Link to= {`/item/${producto.id}`} className="btn btn-primary my-2" variant="primary">Ver Mas</Link>
      </Card.Body>
      </Card>
           
    )
}

export default Item






