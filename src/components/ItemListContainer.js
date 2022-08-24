

const ItemListContainer = ( { usuario1 = "Cosme Fulanito", correoElectronico= "callefalsa123@gmail.com"} ) => {
    return (
      <div >
        <h2>Bienvenido {usuario1}</h2>
        <hr/>
        <p>Su correo {correoElectronico} se ha registrado con éxito.</p>
      
      
      </div>
    );
  }
  
  export default ItemListContainer;
  