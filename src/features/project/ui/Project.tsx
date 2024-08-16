
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, styled } from '@mui/material';
import logoAdmin from "../../../shared/assets/svg/logoAdmin.svg";
import EditIcon from "../../../shared/assets/svg/changeIconPen.svg";
import DeleteIcon from "../../../shared/assets/svg/IconDeletePink.svg";
import { Link, useNavigate } from 'react-router-dom';
import {  OverflowCell, StudentAdd, StudentComponent, StudentContent, TableAll, TableCellAll, TableContainercell ,Image, TableRowStyle, StyledTableCell, TableCellStart, TableCellEnd, StyleTableRow, TableCellIcons} from '../ui/styles';
import { data, StatusCellProps } from './type';
import ModalComponent from 'shared/ui/modals/ModalComponent';
import ListModal from 'widgets/project/ListModal';
import ButtonAdd from 'shared/ButtonAdd';

const Project:React.FC<StatusCellProps> = () => {
  const [ openModal, setOpenModal] = React.useState(false);
  const navigate = useNavigate();
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
          <p>Проекты</p>
          <ButtonAdd openPopup={handleOpen}/>
          {
          openModal && 
          <ModalComponent open={openModal} handleClose={handleClose} title='Создать проект' >
          <ListModal />
        </ModalComponent>  // Отображаем модальное окно при открытии панели редактирования
        }
          
          
        </StudentAdd>  
      </StudentComponent>
      
      <TableContainercell>
        <TableAll>  
          <TableHead sx={{}}>
            <TableRowStyle >
              <StyledTableCell style={{   paddingLeft: ''}}>Название проекта </StyledTableCell>
              <StyledTableCell style={{   marginRight:''}}>Описание</StyledTableCell>
              <StyledTableCell style={{paddingRight: '',}}>Дата начало</StyledTableCell>
              <StyledTableCell>Дата завершении</StyledTableCell>
              <StyledTableCell>Действи</StyledTableCell>
            </TableRowStyle>
          </TableHead>
          <TableBody 
              style={{
                 height: '500px', 
                 overflowY: 'scroll',
                
                 }}
                  >
            {data.map((row, index) => (
            <StyleTableRow key={index} >
              
              
              <TableCellAll>
                   {row.name}
              </TableCellAll>
             
                <OverflowCell title={row.direction}>
                      {row.direction}
                 </OverflowCell>
              <TableCellStart >
                  {row.start}
              </TableCellStart> 
              <TableCellEnd >
                  {row.end}
              </TableCellEnd>

              <TableCellIcons >
                <Link to='/projectDetails'>
                    <img src={EditIcon} alt="EditIcon" 
                    style={{ cursor: 'pointer', marginLeft: '30px' , marginRight: '10px'}} />
                </Link>
                    <img src={DeleteIcon} alt="DeleteIcon" style={{ cursor: 'pointer' }} />
                </TableCellIcons>
            </StyleTableRow>
            ))}
          </TableBody>
        </TableAll>
      </TableContainercell>
    </StudentContent>
  );
};

export default Project;


