const ItemDetail = ({item}) => {

    return (
        <div className="container my-5">
            <img src={item.img} alt={item.nombre}/>
            <h3>{item.nombre}</h3>
            <p>{item.atributos}</p>
            <p>{item.category}</p>
            <h4>Precio: ${item.valor}</h4>
        </div>
    )
}

export default ItemDetail