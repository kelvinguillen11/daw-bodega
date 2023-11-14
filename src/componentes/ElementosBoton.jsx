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
        <button className="btn btn-danger ms-3" onClick={openModal}>
            Eliminar
        </button>
        <Modal isOpen={isOpenModal} closeModal={closeModal}> 
        <div className="container-sm">
        <span>Desea Eliminar el registro No {items.id}?</span>
        <button  type="button" onClick={Eliminate}>Confirmar</button>
        <button type="button" onClick={closeModal}>Cancelar</button>
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
    <button onClick={openModal}> Importar Datos</button>
   </div>
    <Modal isOpen={isOpenModal} closeModal={closeModal}>
     <div className="container-sm">
        <span>La siguiente accion importara datos hacia su area de trabajo</span>
        <button  type="button" onClick={confirmProcess}>Confirmar</button>
        <button type="button" onClick={closeModal}>Cancelar</button>
        </div>  
     </Modal>
     </>
   )
}