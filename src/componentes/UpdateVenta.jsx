import Modal from "./Modal";
import { useModals } from "../services/hooks/useModals";
export const BotonUpdate = ({closeAllmodal})=>{
    const [isOpenModal,openModal,closeModal] = useModals(false); 
    
    const ModificateConfirm = ()=>{
        closeModal();
        closeAllmodal();
    }
   
    return(
        <>
        <button className="btn btn-warning" type="button" onClick={openModal}>
           Modificar
        </button>
        <Modal isOpen={isOpenModal} closeModal={closeModal}> 
        <div className="container-sm">
        <span>Desea guardar los cambios?</span>
        <button  type="submit" onClick={ModificateConfirm}>Guardar</button>
        <button type="button" onClick={closeModal}>Cancelar</button>
        </div>
        </Modal>
        </>
    )
}