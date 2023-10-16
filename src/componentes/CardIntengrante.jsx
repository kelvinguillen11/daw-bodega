import '../hojas-de-estilo/cardIntegrante.css';
function CardIntegrante(props){
  return(
    <div className="Contenedor-card-principal">
        <div className="Img-Integrante">
            <img src={require(`../img/imagen-de-${props.img}.png`)} alt="integrante"/>
        </div>
        <div className="Contenedor-informacion">
            <h4 className="fs-3 text-white">{props.Nombre}</h4>
        </div>
    </div>
  );  
}

export default CardIntegrante;