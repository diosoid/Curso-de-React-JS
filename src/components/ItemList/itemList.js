
import './ItemList.css'
import Item from "../Item/Item";




const ItemList = ( { productos = [] } ) => {
 
    return (
      <div className="container my-5" id="contenedor-productos">       
      { productos.map((prod)=>{
        return <Item producto={prod} key={prod.id} />
      })}      

      </div>

    );
}

export default ItemList;