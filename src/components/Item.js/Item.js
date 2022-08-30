



const Item = ({producto}) => {
    return(
        <div>

            <img src={producto.img} />

            <h4>{producto.nombre}</h4>
            <p>Precio: {producto.valor}</p>
            <small>Stock: {producto.cantidad}</small>
            <p>{producto.descripcion}</p>

        </div>
    )
}

export default Item