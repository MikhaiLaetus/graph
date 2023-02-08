import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function BusinessTable({tableData, handleClick}) {
  const today = tableData[1];
  const yesterday = tableData[0];

  function createData(name, dataType, today, yesterday) {
    let difference = Math.floor((today * 100) / yesterday) - 100;
    return { name, today, yesterday, difference, dataType};
  }
  
  const rows = [
    createData('Выручка','revenue', today.revenue, yesterday.revenue),
    createData('Наличные','cash', today.cash, yesterday.cash),
    createData('Безналичный расчет','cashless', today.cashless, yesterday.cashless),
    createData('Средний чек, руб','averageСheck', today.averageСheck, yesterday.averageСheck),
    createData('Средний гость, руб','averageGuest', today.averageGuest, yesterday.averageGuest),
    createData('Удаление из чека (после оплаты), руб','deletionFromCheck', today.deletionFromCheck, yesterday.deletionFromCheck),
    createData('Удаление из счета (до оплаты), руб','deletionFromBill', today.deletionFromBill, yesterday.deletionFromBill),
    createData('Количество чеков','checks', today.checks, yesterday.checks),
    createData('Количество гостей','guests', today.guests, yesterday.guests),
  
  ];

  return (
    <TableContainer component={Paper}>
      <Table  size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Показатель</TableCell>
            <TableCell align="right">Текущий день</TableCell>
            <TableCell align="right">Вчера</TableCell>
            <TableCell align="right">Разница</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} style={{cursor: 'pointer'}} onClick={() => handleClick(row.name, row.dataType)}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.today}</TableCell>
              <TableCell align="right">{row.yesterday}</TableCell>
              <TableCell style={
                row.difference < 0 ? {backgroundColor:'#ffbfaa', color: 'red'}: {backgroundColor:'#90EE90', color: 'green'}} 
                align="right">
                  {row.difference}%
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
