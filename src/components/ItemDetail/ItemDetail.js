
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './ItemDetail.css'
import { Container } from "@mui/system";
import Contador from '../Contador/Contador';
import { useState,  } from "react"
import Select from '../Select/Select';




const ItemDetail = ({item}) => {

    const [cantidad, setCantidad] = useState(1)
    const [color, setColor] =  useState(item.options[0].value)


    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            precio: item.precio,
            nombre: item.nombre,
            color,
            cantidad
        }
        console.log({
            ...item,
            cantidad
        })
        console.log(itemToCart)

    }
    
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

      <Select options={item.options} onSelect={setColor}  />
      <Contador
      max={item.cantidad}
      counter={cantidad}
      setCounter={setCantidad}
      handleAgregar={handleAgregar}
      />

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


    