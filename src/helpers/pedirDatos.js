

import { stock } from "../data/Data"


export const pedirDatos = () => {
    return new Promise ((resolve, reject) => {

     setTimeout (()=>{

     resolve(stock)
     //reject("Promesa rechazada")
   }, 2000)


 })
}