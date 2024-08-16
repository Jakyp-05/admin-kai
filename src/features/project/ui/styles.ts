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



//table style start -_-

export const StyleTableRow = styled(TableRow)(({ theme }) => ({

}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  textAlign: 'center',
  fontSize: '20px',
  fontWeight: 500, 
  fontFamily: 'Montserrat',
  zIndex: 1,
  backgroundColor: '#fff',
  position: 'relative'
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
  textAlign:'center',
  fontSize: '18px',
  fontWeight: 500, 
  fontFamily: 'Montserrat',
  color: 'rgba(51, 51, 80, 1)',
  
}));

export const Image = styled("img")({
  width: '36px',
    height: '36px',
    borderRadius: '50%',
    objectFit: 'cover',
    cursor: 'pointer',
    // position:'absolute',
    // top: '44px',
    // left: '20px',
    
}); 

export const TableCellIcons = styled(TableCell)(({ theme }) => ({
  
  
}));

export const OverflowCell = styled(TableCell)({
  // borderBottom: 'none',
  maxWidth: '20px', // Ограничение максимальной ширины ячейки
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  textAlign:'center',
  fontSize: '18px',
  fontWeight: 500, 
  fontFamily: 'Montserrat',
  color: 'rgba(51, 51, 80, 1)',
});

export const TableCellStart = styled(TableCell)({
  textAlign:'center',
  fontSize: '18px',
  fontWeight: 500, 
  fontFamily: 'Montserrat',
  color: 'rgba(51, 51, 80, 1)',
});

export const TableCellEnd = styled(TableCell)({
  textAlign:'center',
  fontSize: '18px',
  fontWeight: 500, 
  fontFamily: 'Montserrat',
  color: 'rgba(255, 0, 0, 1)'
});


export const TableRowStyle = styled(TableRow)({
  width: '100%',
  position: "sticky",
  top: 0,
  zIndex: 49,
  background: '#000',
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
