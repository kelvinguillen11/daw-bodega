import { useState } from "react";
import {obtainValueByApi } from '../Ventas/ventasUtils';

export const UseDataAPi = () =>
{
    const[Data,setData] = useState([]);

    const fetchData = async () => {
        try {
          const data = await obtainValueByApi(); 
          setData(data);
        } catch (error) {
        }
      };
      
     return [Data,fetchData];
}