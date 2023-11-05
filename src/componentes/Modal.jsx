import '../hojas-de-estilo/modal.css'
const Modal = ({children,isOpen,closeModal}) => {
  return(
    <article className={`modal ${isOpen && "is-open"}`}> 
        <div className="modal-container">
        {children}
        <button className="modal-close btn btn-success" onClick={closeModal}>X</button>
        </div>
    </article>
  );
}

export default Modal;
