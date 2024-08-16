import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, styled } from '@mui/material';

export const StudentContent = styled("div")(({ theme }) => ({
  width: "100%",
  // minHeight: "86vh",
  backgroundColor: "#FFFFFF",
  borderRadius: "3px",
  position:'relative'

}));

export const StudentComponent = styled("div")({
  color: "darkslategray",
  padding: "30px 50px 0px 50px",
  borderRadius: 4,
});

export const StudentAdd = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "3px solid #B6B7BC",
  padding: "0 0 10px 0",
  p: {
    color: "rgba(51, 51, 80, 1)",
    fontSize: "24px",
    fontWeight: 500,
    fontFamily:'sans-serif , Montserrat'

  },
});

 export const ButtonAdd = styled("button")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
 gap: "10px",
  width: "166px",
  height: "46px",
  background: "#36CBFF",
  "&:hover": {
    background: 'rgba(41, 185, 235, 1)',
    boxShadow: '0px 0px 30px 0px rgba(128, 222, 255, 1)',

  },
  fontWeight: 600,
  fontSize: "16px",
  color: "#FCFCFC",
  borderRadius: "7px",
  fontFamily:'sans-serif , Montserrat',
  span:{
    fontSize: '16px',
    fontWeight: 600,
    color: "#FCFCFC",
    fontFamily:'sans-serif , Montserrat'
  }

});



export const Image = styled("img")({
  width: '36px',
    height: '36px',
    borderRadius: '50%',
    objectFit: 'cover',
    cursor: 'pointer',
}); 

//table style start -_-

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  textAlign: 'center',
  fontSize: '20px',
  fontWeight: 500, 
  fontFamily: 'Montserrat',
  zIndex: 1,
  backgroundColor: '#fff',
}));

export const TableContainercell = styled(TableContainer)(({ theme }) => ({
  border: 'none',
  boxShadow: 'none',
  width:'100%'  ,
  maxWidth: '1028px',
  maxHeight: '500px', // Ограничение высоты контейнера для таблицы
  margin: '0 auto',
  padding: '0 50px 120px 50px',
  overflowY: 'auto', // Вертикальная прокрутка
}));

export const TableAll = styled(Table)(({ theme }) => ({
  width: '100%',
  backgroundColor: '#4b5563',
  minHeight: '200px',
  background: '#fff',
}));


export const TableCellAll = styled(TableCell)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '5px',
  textAlign: 'center',
}));

export const OverflowCell = styled(TableCell)({
  borderBottom: 'none',
  maxWidth: '20px', // Ограничение максимальной ширины ячейки
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  textAlign:'center'
});


export const TableRowStyle = styled(TableRow)({
  width: '100%',
  position: "sticky",
  top: 0,
  zIndex: 49,
  background: '#fff',
  '&::after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '1px',
    backgroundColor: 'rgba(187, 187, 187, 1)', // Граница с использованием псевдо-элемента
  },
});
// table style end //

// style scroll start //
