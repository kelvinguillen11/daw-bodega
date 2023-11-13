import { useModals } from "../services/hooks/useModals";
import FormularioUD from "./FormularioUD";
import Modal from "./Modal";

export const BotonDelete = ({items,eliminateRow}) =>{
    const Eliminate =() =>{
        eliminateRow(items);
    }
    return(
       <>
       <button className="btn btn-danger ms-3" onClick={Eliminate}>
            Eliminar
        </button>
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
      <FormularioUD setFunctionRow={setFRow} ItemsU={items}/>
      </Modal>
      </>
    )
}
