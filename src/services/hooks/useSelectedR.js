import { useState } from "react"

export const useSelectedR = () =>{
    const [rowSelected,setRowSelected] = useState([]);  

    const cancelSelection = (id) => {
        if(rowSelected.length !==0){
          console.log(rowSelected);
          const newData = rowSelected.filter(Item => Item.id !== id);
          console.log(newData);
          setRowSelected(newData);
        }
      }
    
    const rowClick = (ventaSelected) => {
        setRowSelected([...rowSelected,ventaSelected]);
     } 

     const resetSelect = () =>{
        setRowSelected([]);
     }
      
    return[rowSelected,cancelSelection,rowClick,resetSelect];
}