import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { getVentas } from '../Ventas/ventasUtils';

export const convertJsonToExcel = () => {
    const jsonData = getVentas();

    const ws = XLSX.utils.json_to_sheet(jsonData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Hoja1');

    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, 'ventas_totales.xlsx');
  };