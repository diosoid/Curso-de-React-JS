

const ItemListContainer = ( { usuario1 , correoElectronico} ) => {
    return (
      <div className="container my-5">
        <h2>Bienvenido {usuario1}</h2>
        <hr/>
        <p>Su correo {correoElectronico} se ha registrado con éxito.</p>
      
      
      </div>
    );
  }
  
  export default ItemListContainer;
  