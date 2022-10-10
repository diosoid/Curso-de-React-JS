import ItemList from "../ItemList/itemList"
import Loader from "../Loader/Loader"
import { useLoginContext } from "../Context/LoginContext"
import { useProductos } from "../../hooks/useProductos"
   
   const ItemListContainer = () => {

    const {productos, loading } = useProductos()
      
      const {user} = useLoginContext()
      /* console.log(user) */
      
      return (
          <div >
            {
              loading            
              ?  <Loader/>
              : <ItemList productos={productos}/>
            }
          </div>           
    );
}
  
export default ItemListContainer;
  