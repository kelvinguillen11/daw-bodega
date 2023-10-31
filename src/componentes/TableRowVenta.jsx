function TableRowVenta({item}){
    return(
        <tr >
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>{item.rating.count}</td>
            <td>{item.description}</td>
            <td>{item.category}</td>
            <td>
                Botones
            </td>
        </tr>
    );
}

export default TableRowVenta;