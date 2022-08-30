import Item from "../Item.js/Item";




const ItemList = ( { productos = [] } ) => {
 
    return (
      <div className="container my-5">
        <h2>Productos</h2>
        <hr/>


      { productos.map((prod)=>{
        return <Item producto={prod} key={prod.id} />
      })}      

      </div>

    );
}

export default ItemList;