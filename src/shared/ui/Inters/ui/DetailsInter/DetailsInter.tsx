


import React from 'react';
import logoAdmin from '../../../../assets/svg/logoAdmin.svg';
import backIcon from '../../../../assets/svg/BackIcon.svg';
import {Container,Header,BackButton,ButtonAdd,StudentInfo,Image,TableContainer,Table,TableHead,TableHeader,TableRow,TableBody,TableCell, StatusCell} from '../../style/style'
import { useNavigate } from 'react-router-dom';
import EditInternModal from '../InputAndSelect/modalEdits/modal';
const data = [
  { direction: 'Java script', project: 'Computer store', status: 'Linked to project', levelWold: 'B1',levelNumber : ''},
  { direction: '', project: 'AI-LMS', status: 'Adaptation', levelWold: '',levelNumber : 'B1'},
  { direction: '', project: 'Safe.clinic', status: 'Evaluated',  levelWold: '',levelNumber : ''},
  { direction: '', project: 'CRM', status: 'Interview',  levelWold: '',levelNumber : '' },
  { direction: '', project: 'CRM2', status: 'Employed',  levelWold: '',levelNumber : ''},
  { direction: '', project: 'CRM3', status: 'Interview',  levelWold: '',levelNumber : ''},
];

const DetailsInter = () => {
  const [ openModal, setOpenModal] = React.useState(false)
  const navigate = useNavigate();
  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal
    (false);
  };

  return (
    <Container>
      <Header>
        <BackButton>
        <img src={backIcon} alt="" onClick={() => navigate(-1)}/> 
          Информация о стажёра
          </BackButton>
        <ButtonAdd onClick={handleOpen}>Редактировать</ButtonAdd>
        <EditInternModal open={openModal} onClose={handleClose} />
      </Header>
      
      <StudentInfo>
        <Image src={logoAdmin} alt="Аватар" />
        <h5>Кудуретова Асыл</h5>
        <p>asylaltynbekkyzy55@gmail.com</p>
        <p>+996(501) 394 397</p>
      </StudentInfo>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Направления</TableHeader>
              <TableHeader>Проекты</TableHeader>
              <TableHeader>Статус</TableHeader>
              <TableHeader>Уровень</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.direction}</TableCell>
                <TableCell>{row.project}</TableCell>
                <StatusCell status={row.status}>{row.status}</StatusCell>
                <TableCell> <p>{row.levelWold}</p> <p>{row.levelNumber}</p></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default DetailsInter;




