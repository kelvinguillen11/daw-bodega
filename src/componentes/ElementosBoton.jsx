import { useModals } from "../services/hooks/useModals";
import FormularioUD from "./FormularioUD";
import Modal from "./Modal";

export const BotonDelete = ({items,eliminateRow}) =>{
    const [isOpenModal,openModal,closeModal] = useModals(false); 
    const Eliminate =() =>{
        eliminateRow(items);
    }
    return(
       <>
        <button className="btn btn-danger mt-1" onClick={openModal}>
            Eliminar
        </button>
        <Modal isOpen={isOpenModal} closeModal={closeModal}> 
        <div className="container-sm d-flex  flex-column justify-content-center align-items-center">
        <div className="mt-5 container-lg text-center">
        <span className="fs-5">Desea Eliminar el registro No {items.id}?</span>
        </div>
         <div className="container-lg mt-5 d-flex justify-content-center">
        <button className="btn btn-danger" type="button" onClick={Eliminate}>Confirmar</button>
        <button className="btn btn-success" type="button" onClick={closeModal}>Cancelar</button>
         </div>
        </div>
       </Modal>
       </>
    );
}

export const BotonUD = ({setFRow,items}) =>{
   const [isOpenModal,openModal,closeModal] = useModals(false); 
   return(
      <>
       <button className="btn btn-warning" onClick={openModal}>
        Interactuar
      </button>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
      <FormularioUD setFunctionRow={setFRow} ItemsU={items} closeModalForm={closeModal}/>
      </Modal>
      </>
    )
}

export const ConfirmDataApi = ({addData}) => {
  const [isOpenModal,openModal,closeModal] = useModals(false); 
  const confirmProcess = () =>{
    addData();
    closeModal();
  }
 
  return(
     <>
    <div>
    <button className="btn btn-success mb-3" onClick={openModal}> Importar Datos</button>
   </div>
    <Modal isOpen={isOpenModal} closeModal={closeModal}>
     <div className="container-sm d-flex  flex-column justify-content-center align-items-center">
        <div className="mt-5 container-lg text-center">
        <span className="mt-3 d-block">La siguiente accion importara datos hacia su area de trabajo.</span>
         <strong> 
         <p>Desea continuar?</p>       
         </strong>
         </div>
        <div className="container-lg mt-3 d-flex justify-content-center">
        <button className="btn btn-success" type="button" onClick={confirmProcess}>Confirmar</button>
        <button className="btn btn-secondary ms-1" type="button" onClick={closeModal}>Cancelar</button>
        </div>
        </div>  
     </Modal>
     </>
   )
}