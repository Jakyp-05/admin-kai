
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, styled } from '@mui/material';
import logoAdmin from "../../../shared/assets/svg/logoAdmin.svg";
import EditIcon from "../../../shared/assets/svg/changeIconPen.svg";
import DeleteIcon from "../../../shared/assets/svg/IconDeletePink.svg";
import vectorOption from "../../../shared/assets/svg/vectorOption.svg";
import { Link } from 'react-router-dom';
import AddInternModal from 'shared/ui/Inters/ui/InputAndSelect/modalInters/modalInters';
import { ButtonAdd, StudentAdd, StudentComponent, StudentContent } from '../style/style';

interface StatusCellProps {
  status: string;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold',
  textAlign: 'center', // Центрирование текста в заголовках
}));

const TableCellAll = styled(TableCell)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center', // Центрирование содержимого ячейки
  gap: '5px',
  textAlign: 'center', // Центрирование текста
}));

const OverflowCell = styled(TableCell)({
  borderBottom: 'none',
  // textAlign: 'center',
  width: '150px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  // position: 'relative',
  // '&:hover': {
  //   overflow: 'visible',
  //   // whiteSpace: 'normal',
  //   zIndex: 1,

  // },
  // '&:hover::after': {
  //   content: 'attr(data-text)',
  //   position: 'absolute',
  //   top: '10px',
  //   left: "0",
  //   whiteSpace: 'normal',
  //   backgroundColor: '#fff',
  //   border: '1px solid #ccc',
  //   padding: '5px',
  //   zIndex: 2,
  //   width: 'max-content',
  //   maxWidth: '300px', // Adjust this as needed
  //   boxSizing: 'border-box',
  // }
});

const TableAll = styled(Table)(({ theme }) => ({}));
const Image = styled("img")(({ theme }) => ({
  width: '36px',
  height: '36px',
  borderRadius: '50%',
  objectFit: 'cover',
  // cursor: 'pointer',
}));

const StatusCell = styled(TableCell)<StatusCellProps>(({ status }) => ({
  color: status === 'Adaptation' ? 'orange' : 
         status === 'Evaluated' ? 'green' : 
         status === 'Linked to project' ? 'blue' : 
         status === 'Interview' ? 'purple' : 
         status === ' ' ? 'darkgreen' : 'black',   
  borderBottom: 'none',
  background: 'rgba(239, 255, 237, 1)',
  width: '238px',
  height: '36px',
  paddingBottom: '15px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: 'auto 0',
  textAlign: 'center', // Центрирование текста
}));


const data = [
  { name: 'Кудуретова Асыл', direction: 'Java script 7777777777 test test  ', status: 'Adaptation' },
  { name: 'Кудуретова Асан', direction: 'Java script', status: 'Evaluated' },
  { name: 'Кудуретова Асан', direction: 'Java script', status: 'Linked to project' },
  { name: 'Кудуретова Асан', direction: 'Java script', status: 'Interview' },
  { name: 'Кудуретова Асан', direction: 'Java script', status: 'Employed' },
];

const InterList = () => {
  const [ openModal, setOpenModal] = React.useState(false)

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal
    (false);
  };

  return (
    <StudentContent>
      <StudentComponent>
        <StudentAdd>
          <p>Стажёры</p>
          <ButtonAdd onClick={handleOpen}>+ Добавить</ButtonAdd>
  
            <AddInternModal open={openModal} onClose={handleClose} />
   
        </StudentAdd>  
      </StudentComponent>

      <TableContainer component={Paper} style={{ border: 'none', boxShadow: 'none', width: '100%', margin: '0 auto', padding: '0 50px 0 50px' }}>
        <TableAll>  
          <TableHead>
            <TableRow style={{display:'flex' ,alignContent:'center' , justifyContent:'space-between' , borderBottom:'1px solid rgba(187, 187, 187, 1)'}}>
              <StyledTableCell style={{ width: '150px',paddingLeft: '80px',border: 'none'}}>Имя</StyledTableCell>
              <StyledTableCell style={{width: '150px',border: 'none' , marginRight:'25px'}}>Направления</StyledTableCell>
              <StyledTableCell style={{ width: '150px',paddingRight: '80px',border: 'none' }}>Статус</StyledTableCell>
              <StyledTableCell style={{ width: '150px',border: 'none' }}>Действия</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index} style={{display:'flex' , alignItems:'center' , justifyContent:'space-between', width:'100%'}}>
              
               <TableCellAll style={{ borderBottom: 'none', width:'200px' }}>
                  <Image src={logoAdmin} alt="profile" />
                   {row.name}
                </TableCellAll>
              
                <OverflowCell title={row.direction} 
                // data-text={row.direction}
                >
                      {row.direction}
                 </OverflowCell>
                <StatusCell status={row.status} style={{}}>{row.status}
                  <img src={vectorOption} alt="vectorOption" />
                </StatusCell>
                <TableCell style={{ borderBottom: 'none', textAlign: 'center', width: '150px' }}>
                <Link to='routeDetails'><img src={EditIcon} alt="EditIcon" style={{ cursor: 'pointer', marginRight: '10px' }} /></Link>
                  <img src={DeleteIcon} alt="DeleteIcon" style={{ cursor: 'pointer' }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableAll>
      </TableContainer>
    </StudentContent>
  );
};

export default InterList;


