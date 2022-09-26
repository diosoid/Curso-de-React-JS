import { useEffect, useState } from "react"
/* import { pedirDatos } from "../../helpers/pedirDatos"  */ 
import ItemList from "../ItemList/itemList"
import { Navigate, useParams } from "react-router-dom"
import { collection,  getDocs, query, where } from "firebase/firestore"
import { db } from "../../FireBase/config"
import Loader from "../Loader/Loader"
import { useLoginContext } from "../Context/LoginContext"
 
  
   const ItemListContainer = () => {


    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    

    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, 'productos')
        const q = categoryId 
                      ?query(productosRef, where('category', '==', categoryId) )
                      : productosRef
      

          getDocs(q)
          .then((resp) =>{
            const productosDB = resp.docs.map((doc)=> ({id: doc.id, ...doc.data()}))
            console.log(productosDB)
            setProductos(productosDB)
          })
          .finally(()=>{
            setLoading(false)
  
          })

      }, [categoryId])

       /*  pedirDatos()

            .then( (res) => {
                if (!categoryId) {
                    setProductos(res)
                } else {
                    setProductos( res.filter((prod) => prod.category === categoryId) )
                }
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId]) */

      const {user} = useLoginContext()


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
  