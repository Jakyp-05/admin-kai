import axios from 'axios';
import React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logoAdd from 'shared/assets/svg/logoAdd.svg';
import PlusIcon from 'shared/assets/svg/VectorPlus.svg';
import CancelIcon from 'shared/assets/svg/VectorX.svg';
import FormIntersEdit, { FormData } from '../FormInters/FormInters';
import { useOutSideClick } from "../../../../../../shared/hooks/useOutSideClick";

type Props = {
  open: boolean;
   onClose: () => void
}
const EditInternModal: React.FC<Props> = ({ open, onClose }) => {
  const handleSubmit = async (data: FormData) => {
    try {
      const response = await axios.post('/api/interns', data);
      console.log('Success:', response.data);
      onClose(); // Закрыть модальное окно после успешной отправки
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const modalRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef?.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  return (
    <DialogDiv >
    <StyledDialog ref={modalRef}>
      <StyledDialogTitle>Редактировать</StyledDialogTitle>
      <StyledDialogGroupTwo>
        <AddPhoto>
          <ImgPhoto src={logoAdd} alt="Add Logo" />
          <EditPhoto>Добавить фото</EditPhoto>
          <DeletePhoto>Удалить фото</DeletePhoto>
        </AddPhoto>
        <FormComponent>
          <FormIntersEdit onSubmit={handleSubmit} />
        </FormComponent>
      </StyledDialogGroupTwo>
      <StyledDialogActions>
        <CancelButton onClick={onClose}>
           <img src={CancelIcon} alt="Отмена" />
            Отмена
        </CancelButton>
        <SaveButton type="submit">
            <img src={PlusIcon} alt="" />
             Сохранить
        </SaveButton>
      </StyledDialogActions>
    </StyledDialog>
    </DialogDiv>
  );
};

export default EditInternModal;

const DialogDiv = styled("div")({
  backgroundColor:' rgba(0, 0, 0, 0.5)',
  position: 'fixed',
  top: 0,
  right: 0,
  width: '100%',
  height: '100%',
  zIndex: '2',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  
});         

const StyledDialog = styled('div')({
  position: 'absolute',
  top: '47%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  width: '50%',
  height:'100%',
  maxWidth: '710px',
  maxHeight:'670px',
  margin: '20px auto',
  padding: '0 0 30px 0 ',
  borderRadius: '10px',
  zIndex: '50',
  boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.2)',
  
});

const StyledDialogTitle = styled('p')({
  backgroundColor: 'rgba(54, 203, 255, 1)',
  // padding: '16px 0',
  width: '100%',
  maxWidth: '710px',
  height: '83px',
  padding: '16px 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  color: 'white',
  fontSize: '32px',
  fontWeight: '500',
  fontFamily: 'sans-serif, Montserrat',
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px',
  textAlign: 'center',
  // color: 'white',
  // fontSize: '32px',
  // fontWeight: '500',
  // fontFamily: 'sans-serif, Montserrat',
  // borderTopLeftRadius: '10px',
  // borderTopRightRadius: '10px',
});

const StyledDialogActions = styled(DialogActions)({
  justifyContent: 'flex-end',
  gap: '5px',
  padding: '10px 35px 0 0',
});

const StyledDialogGroupTwo = styled('div')({
  // display: 'block',
  flexDirection: 'column',
  alignItems: 'center',
  width: '710px',
});

const AddPhoto = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '15px 0 0 0',
});

const ImgPhoto = styled('img')({
  width: '73px',
  height: '73px',
  borderRadius: '50%',
});

const EditPhoto = styled('button')({
  fontSize: '11px',
  fontWeight: '400',
  color: 'rgba(51, 51, 80, 1)',
  marginTop: '10px',
});

const DeletePhoto = styled('button')({
  fontSize: '11px',
  fontWeight: '400',
  color: 'rgba(255, 0, 0, 1)',
  marginTop: '10px',
});

const CancelButton = styled('button')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  backgroundColor: 'rgba(131, 131, 131, 1)',
  color: 'white',
  width: '148px',
  height: '43px',
  borderRadius: '7.3px',
  ":hover":{
    backgroundColor: 'rgba(131, 131, 131, 1)',
  }
});

const SaveButton = styled('button')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  backgroundColor: 'rgba(54, 203, 255, 1)',
  color: 'white',
  width: '174px',
  height: '43px',
  borderRadius: '7.3px',
});

const FormComponent = styled('div')({
  width:'710px',
  maxWidth:'710px',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
});
