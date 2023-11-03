import { useState } from "react";
import { BotonDelete, BotonUD } from "./ElementosBoton";
import { UseRows } from "../services/hooks/UseRows";
function TableRowVenta({item, eliminate}){
    const [items,Modificate] = UseRows({...item})
    
    const setRow = (updateData) =>
    {   
            Modificate(updateData);

            
    }
    return(
        <tr >
            <td>{items.id}</td>
            <td>{items.title}</td>
            <td>{items.price}</td>
            <td>{items.rating.count}</td>
            <td className="px-5">{items.description}</td>
            <td>{items.category}</td>
            <td>
                <div className="row">
                <BotonUD setFRow={setRow} items={items} />
                <BotonDelete items={items} eliminateRow={eliminate}/>
                </div>
            </td>
        </tr>
    );
}

export default TableRowVenta;