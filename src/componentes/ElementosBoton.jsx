import { useModals } from "../services/hooks/useModals";
import FormularioUD from "./FormularioUD";
import Modal from "./Modal";
import TablaDataApi from "./TablaDataApi";


export const BotonUpdate = ()=>{
    return(
        <button className="btn btn-warning" type="submit">
           Modificar
        </button>
    )
}

export const BotonDelete = ({items,eliminateRow}) =>{
    const Eliminate =() =>{
        eliminateRow(items);
    }
    return(
        <button className="btn btn-danger ms-3" onClick={Eliminate}>
            Eliminar
        </button>
    );
}

export const BotonUD = ({setFRow,items,eliminateR}) =>{
   const [isOpenModal,openModal,closeModal] = useModals(false); 
   return(
      <>
       <button onClick={openModal}>
        Interactuar
      </button>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
      <FormularioUD setFunctionRow={setFRow} ItemsU={items}/>
      </Modal>
      </>
    )
}

export const DataByApi = () =>{
    const [isOpenModal,openModal,closeModal] = useModals(false); 
    return(
       <>
        <button onClick={openModal}>
         Interactuar
       </button>
       <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <TablaDataApi/>
       </Modal>
       </>
     )
}