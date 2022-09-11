



const Nosotros = () => {

    const handleClick = () => {

        console.log("Click!")
    }
    
    

    
    return (

        <div className="conainer my-5">

            <h1 onClick = {handleClick}> Nosotros</h1>
            <hr></hr>

        </div>
    )
}

export default Nosotros

