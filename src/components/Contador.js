
import { useState } from "react"



const Contador = (  ) => {

    //let counter = 1

    let [counter, setCounter] = useState(1)
    const[ saludar, setSaludar] = useState(false)

    const handleSumar = () => {
        setCounter (counter + 1)
        console.log(counter)
    }

    const handleRestar = () => {
        if (counter > 0) {
            setCounter (counter - 1)
        }               
    }

    const handleSaludar = () => {
        setSaludar(!saludar)
    }



    return (
      <div className="container my-5">

        <h2>Contador</h2>
        <hr/>

        <button onClick={handleRestar} className="btn btn-outline-primary">-</button>
        <span className="mx-2"> {counter} </span>
        <button onClick={handleSumar}className="btn btn-primary">+</button>
        <hr/>
        <button onClick={handleSaludar} className="btn btn-success"> {saludar ? "Hola!" : "Chau!" }</button>

      </div>
        
      
      
    );
  }
  
  export default Contador;