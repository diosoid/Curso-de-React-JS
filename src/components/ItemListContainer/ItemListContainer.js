import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"  
import ItemList from "../ItemList/itemList"
 
   
   
   
   const ItemListContainer = ( { usuario1 , correoElectronico} ) => {


      const [productos, setProductos ] = useState([])

      console.log(productos)

      useEffect(() => {
        pedirDatos()
          .then( (res) => {
            setProductos(res)
          })
          .catch((error) => {
            console.log(error)
          })
          .finally(() => {
            //console.log("Fin del proceso")
          })

      }, [])

          

      return (
        <div >

          <ItemList productos={productos}/>

          {/* <h2>Bienvenido {usuario1}</h2>
           <hr/>
          <p>Su correo {correoElectronico} se ha registrado con éxito.</p> */}

        </div>

      );
  }
  
  export default ItemListContainer;
  