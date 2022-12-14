
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './ItemDetail.css'
import { Container } from "@mui/system";
import Contador from '../Contador/Contador';
import {  useContext, useState  } from "react"

import { CartContext } from '../Context/CartContext';





const ItemDetail = ({item}) => {

    const { addToCart, isInCart } = useContext(CartContext)
    
    const [cantidad, setCantidad] = useState(1)
    const [color, /* setColor */] =  useState(item.options[0].value)

    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            valor: item.valor,
            nombre: item.nombre,
            modelo: item.modelo,
            color,
            cantidad
        }
        

        addToCart(itemToCart)

    }
    
    return (
    <Container className='container my-5'>
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

      {/* <Select className={`widget ${item.id  ? ''  : 'widget-visible btn btn-primary'}` }  options={item.options} onSelect={setColor}  /> */}

      {
        isInCart(item.id)
        ?<Link to="/Cart" className='btn btn-success my-2'  >Finalizar compra.</Link>   
        :<Contador
        max={item.cantidad}
        counter={cantidad}
        setCounter={setCantidad}
        handleAgregar={handleAgregar}
        />
        
      }

      </Card.Title> 
      </Card.Body>
    </Card>
    </Container>
      
    )
}

export default ItemDetail


    