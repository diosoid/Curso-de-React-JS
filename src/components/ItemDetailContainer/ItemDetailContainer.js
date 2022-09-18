import { useEffect, useState } from "react"
/* import { pedirDatos } from "../../helpers/pedirDatos" */
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"
import {doc, getDoc } from "firebase/firestore"
import { db } from "../../FireBase/config"

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    //console.log(itemId)
    //console.log(item)

    useEffect(() => {
        setLoading(true)
        const docRef = doc(db, 'productos', itemId)

        getDoc(docRef)
        .then((doc) =>{
            setItem({id: doc.id, ...doc.data()})
        .finally(() => {
            setLoading(false)
        })
                
        }, [])


        /* pedirDatos()
            .then((res) => {
                setItem( res.find((prod) => prod.id === Number(itemId)) )
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
            }) */
        // setear el estado con un único producto

    }, [itemId])

    return (
        <div>
            {
                loading
                ? <h2>Loading...</h2>
                : <ItemDetail item={item} />
            }
            

        </div>
    )
}

export default ItemDetailContainer