import { useState } from "react";
import Modal from "./Modal";

export const BotonUpdate = ( )=>{
    const [isOpen, setIsOpen] = useState(false);

    const openModal= () => setIsOpen(true);
    
    const closeModal= () => setIsOpen(false);
    
    const ModificateConfirm = ()=>{
        closeModal();
    }
   
    return(
        <>
        <button className="btn btn-warning" type="button" onClick={openModal}>
           Modificar
        </button>
        <Modal isOpen={isOpen} closeModal={closeModal}> 
        <div className="container-sm">
        <span>Desea guardar los cambios?</span>
        <button  type="submit" onClick={ModificateConfirm}>Guardar</button>
        <button type="button" onClick={closeModal}>Cancelar</button>
        </div>
        </Modal>
        </>
    )
}