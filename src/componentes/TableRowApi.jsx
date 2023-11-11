import { useState } from "react";
import { toast } from "react-hot-toast";
import '../hojas-de-estilo/tableRowApi.css'
function TableRowApi({item,onclick}){
  const [items] = useState({...item})
  const [selected, setSelected]= useState(false);  
  const rowClicked = () => {
       if(!selected)
       {
        onclick(item);
        setSelected(true);
        notifySelectedSuccess();
       }
       else
       {
        notifySelectedError();
       }
  }
  const notifySelectedSuccess = () => toast.success(`Ha seleccionado el item No. ${items.id}`);
  const notifySelectedError = () => toast.error("Ya se ha seleccionado anteriormente.")
    return(
        <tr onClick={rowClicked} className={selected? "table-success" : ' '}>
            <td>{items.id}</td>
            <td>{items.title}</td>
            <td>{items.price}</td>
            <td></td>
            <td className="px-5">{items.description}</td>
            <td>{items.category}</td>
            <td>
                <div className="row">
                </div>
            </td>
        </tr>
    );
}

export default TableRowApi;