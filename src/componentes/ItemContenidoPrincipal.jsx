import '../hojas-de-estilo/itemContenidoPrincipal.css';
import NaveEspacial from '../img/nave.png';
function ItemContenidoPrincipal(props){
    if(props.num === 'nave')
    {
        return(
            <section className={`item-${props.num}`}>
               <div>
               <img src={NaveEspacial} alt="imagen Nave"/>
               </div>
            </section>
        );
    }
    else{
    return(
        <section className={`item item-${props.num}`}>
            <h3>{props.titulo}</h3>
            <p>{props.contenido}</p>
        </section>
    );
    }
}
export default ItemContenidoPrincipal;