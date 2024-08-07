import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import logoAdd from 'shared/assets/svg/logoAdd.svg';
import PlusIcon from 'shared/assets/svg/VectorPlus.svg';
import CancelIcon from 'shared/assets/svg/VectorX.svg';
import FormIntersEdit ,{ FormData } from '../FormInters/FormInters';

const EditInternModal: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  const handleSubmit = async (data: FormData) => {
    try {
      const response = await axios.post('/api/interns', data);
      console.log('Success:', response.data);
      onClose(); // Закрыть модальное окно после успешной отправки
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (!open) return null;

  return (
    <DialogDiv>
      <Dialog>
        <DialogTitle>Редактировать</DialogTitle>
        <DialogGroupTwo>
          <AddPhoto>
            <ImgPhoto src={logoAdd} alt="Add Logo" />
            <EditPhoto>Добавить фото</EditPhoto>
             <DeletePhoto>Удалить фото</DeletePhoto>
          </AddPhoto>
          <DialogContent>
            <FormIntersEdit onSubmit={handleSubmit} />
          </DialogContent>
        </DialogGroupTwo>
        <DialogActions>
          <CancelButton onClick={onClose}>
            <img src={CancelIcon} alt="" /> Отмена
          </CancelButton>
          <SaveButton type="submit">
            <img src={PlusIcon} alt="" /> Сохранить
          </SaveButton>
        </DialogActions>
      </Dialog>
    </DialogDiv>
  );
};

export default EditInternModal;

const DialogDiv = styled.div`
  background-color: rgba(50, 50, 50, 0.4);
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  
`;

const Dialog = styled.div`
  width: 710px;
  // height: 611px;
  margin: 10px auto 0;
  border-radius: 10px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
  padding: 0 0 16px 0;
  background-color: white;
  display: flex;
  flex-direction: column;
   max-height: calc(100vh - 10px);
    overflow-y: auto;
`;

const DialogTitle = styled.h2`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 16px 0;
  width: 710px;
  height: 83px;
  background-color: rgba(54, 203, 255, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  font-weight: 500;
  font-family: sans-serif, Montserrat;
`;

const DialogActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 30px;
  padding: 20px 35px 0 0;
`;

const Button = styled.button`
  margin-left: 8px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const CancelButton = styled(Button)`
  background-color: rgba(131, 131, 131, 1);
  color: white;
  width: 148px;
  height: 43px;
  border-radius: 7.3px;
`;

const SaveButton = styled(Button)`
  background-color: rgba(54, 203, 255, 1);
  color: white;
  width: 174px;
  height: 43px;
  border-radius: 7.3px;
`;

const DialogContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DialogGroupTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddPhoto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0 0;
`;      


const EditPhoto = styled.button`
  font-size:11px;
  font-weight: 400;
  color:rgba(51, 51, 80, 1);
  margin-top: 10px;
  cursor: pointer;
`;     

const DeletePhoto = styled.button`
 font-size:11px;
  font-weight: 400;
  color:rgba(255, 0, 0, 1);
    margin-top: 10px;
    cursor: pointer;

`;     

export const ImgPhoto = styled.img`
 width:73px;
 height:73px;
border-radius:50%;
`;

export const ImgPhotAfter = styled.img`
 width:73px;
 height:73px;
border-radius:50%;
border: 1px solid rgba(0,0,0,0.10);
`;