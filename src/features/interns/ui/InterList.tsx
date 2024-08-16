
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, styled } from '@mui/material';
import logoAdmin from "../../../shared/assets/svg/logoAdmin.svg";
import EditIcon from "../../../shared/assets/svg/changeIconPen.svg";
import DeleteIcon from "../../../shared/assets/svg/IconDeletePink.svg";
import { Link } from 'react-router-dom';
import AddInternModal from 'shared/ui/Inters/ui/InputAndSelect/modalInters/modalInters';
import {  OverflowCell, StudentAdd, StudentComponent, StudentContent, TableAll, TableCellAll, TableContainercell ,Image, TableRowStyle, StyledTableCell} from '../style/style';
import SortStatus from '../../../widgets/sort/SortStatus';
import { data, StatusCellProps } from '../type';
import ButtonAdds from 'shared/ButtonAdd';

const InterList:React.FC = () => {
  const [ openModal, setOpenModal] = React.useState(false);

  const handleOpen = () => {
    document.body.style.overflow = 'hidden';
    setOpenModal(true);
  };

  const handleClose = () => {
    document.body.style.overflow = '';
    setOpenModal
    (false);
  };

  return (
    <StudentContent>
      <StudentComponent>
        <StudentAdd>
          <p>Стажёры</p>
          <ButtonAdds openPopup={handleOpen}/>
  
            { openModal && <AddInternModal open={openModal} onClose={handleClose} />}
   
        </StudentAdd>  
      </StudentComponent>
      
      <TableContainercell>
        <TableAll>  
          <TableHead sx={{}}>
            <TableRowStyle >
              <StyledTableCell style={{   paddingLeft: '',border: 'none'}}>Имя</StyledTableCell>
              <StyledTableCell style={{   border: 'none' , marginRight:''}}>Направления</StyledTableCell>
              <StyledTableCell style={{paddingRight: '',border: 'none' }}>Статус</StyledTableCell>
              <StyledTableCell style={{ border: 'none' }}>Действия</StyledTableCell>
            </TableRowStyle>
          </TableHead>
          <TableBody 
              style={{
                 height: '500px', 
                 overflowY: 'scroll'
                 }}
                  >
            {data.map((row, index) => (
              <TableRow key={index} >
              
               <TableCellAll style={{ borderBottom: 'none', width:'' }}>
                  <Image src={logoAdmin} alt="profile" />
                   {row.name}
                </TableCellAll>
              
                <OverflowCell title={row.direction}>
                      {row.direction}
                 </OverflowCell>
                <SortStatus row={row} index={index} data={data}/>
                <TableCell style={{ borderBottom: 'none', textAlign: 'center', width: '' }}>
                <Link to='routeDetails'><img src={EditIcon} alt="EditIcon" style={{ cursor: 'pointer', marginRight: '10px' }} /></Link>
                  <img src={DeleteIcon} alt="DeleteIcon" style={{ cursor: 'pointer' }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableAll>
      </TableContainercell>
    </StudentContent>
  );
};

export default InterList;


