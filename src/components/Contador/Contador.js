
const Contador = ( {max, counter, setCounter, handleAgregar} ) => {

  
   

    const handleSumar = () => {
        if (counter < max){
            setCounter (counter + 1)

        }
      
    }

    const handleRestar = () => {
        if (counter > 0) {
            setCounter (counter - 1)
        }               
    }

    //useEffect(() => {console.log("Contador montado")}, [])

    return (
      <div className="container my-5">

        
        <hr/>

        <button onClick={handleRestar} className="btn btn-outline-primary">
        -
        </button>
        <span className="mx-2"> {counter} </span>
        <button onClick={handleSumar}className="btn btn-primary">
        +
        </button>

        <br/>

        <button  onClick={handleAgregar}   className="btn btn-success my-2">
            Agregar al carrito
        </button>
              
      </div>
             
    );
  }
  
  export default Contador;