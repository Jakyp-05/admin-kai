// 
import React from 'react';
import { StyledBtnClose, StyledBtnOk, StyledDialog, StyledDialogActions, StyledDialogContent, StyledDialogTitle } from './style/style';
import { ModalComponentProps } from './type/MoalType';
import CloseSvg from '../../assets/svg/VectorX.svg';
import Save from '../../assets/svg/VectorPlus.svg';



const ModalComponent: React.FC <ModalComponentProps> = ({ open, handleClose, title, children }) => {
  return (
    <StyledDialog open={open} onClose={handleClose}>
      <StyledDialogTitle>{title}</StyledDialogTitle>
      <StyledDialogContent>{children}</StyledDialogContent>
      <StyledDialogActions>
      <StyledBtnClose onClick={handleClose} >
        <img src={CloseSvg} alt="close" />
          Отмена
        </StyledBtnClose>
        <StyledBtnOk onClick={handleClose} >
        <img src={Save} alt="save" />
          Сохранить
        </StyledBtnOk>
      </StyledDialogActions>
    </StyledDialog>
  );
};

export default ModalComponent;
