import { useState } from "react";
function TableRowApi({item,onclick}){
  const [items,setItems] = useState({...item})

  const rowClicked = () => {
        onclick(item);
  }
    return(
        <tr onClick={rowClicked}>
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