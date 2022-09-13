import './Item.css'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



const Item = ({producto}) => {
    return(

               
      <Card style={{ width: '18rem' }}  className='producto '>
      <Card.Img variant="top" src={producto.img}  alt={producto.nombre} />
      <Card.Body >
      <Card.Title className='Card-title'>
      {producto.nombre}: {producto.marca}
      </Card.Title>
      <Card.Text className='Card-title'>
      Modelo: {producto.modelo}
      </Card.Text >
      
      <Card.Title className='Card-title'>
      <p>{producto.atributos}</p>
      <p>Precio: ${producto.valor}</p>
      <small>Stock: {producto.cantidad}</small>
      <p>{producto.descripcion}</p>
      <Link to= {`/item/${producto.id}`} className="btn btn-primary my-2 button" variant="primary">Ver Mas</Link>
      </Card.Title>               
      
      </Card.Body>
      </Card>
           
    )
}

export default Item






