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
        <div className="container-sm d-flex  flex-column justify-content-center align-items-center">
        <div className="mt-5 container-lg text-center">
        <span className="fs-5">Desea guardar los cambios?</span>
        </div>
        <div className="container-lg mt-5 d-flex justify-content-center">
        <button className="btn btn-success" type="submit" onClick={ModificateConfirm}>Guardar</button>
        <button className="btn btn-light" type="button" onClick={closeModal}>Cancelar</button>
        </div>

        </div>
        </Modal>
        </>
    )
}