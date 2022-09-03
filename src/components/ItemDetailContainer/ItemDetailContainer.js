import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"


const ItemDetailContainer = ( {idProducto} ) => {

    const [item, setItem] = useState(null)

    console.log(item)

    useEffect (() => {

        pedirDatos()
        .then((res) => {
            setItem(res)
        })
        .catch((error) => {
            console.log(error)
        } )
        .finally(() => {

        })

    }, [])

    return(

        <div>

            {/*  <ItemDetailContainer item ={item}/>  */}

        </div>
    )

}

export default ItemDetailContainer