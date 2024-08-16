 import React from 'react'
import { DateBlock,Image, DateEnd, DateStart, ImageAdd, ImagesBlock, ListFlexDirection, Participants, ParticipantsBlock, ParticipantsTitle, TitileProject, Label, ImageLength, BackInfo, ProjectDiv, InputBlock } from './style/Index';
import TextAreaField from 'shared/ui/inputs/comment/Comment';
import logoAdmin from "../../../shared/assets/svg/logoAdmin.svg";
import userCicleAdd from "../../../shared/assets/svg/user-cirlce-add1.svg";
import BackIcon from "../../../shared/assets/svg/BackIcon.svg";
import MiniModalComponent from 'shared/ui/modals/mini/MiniModalComponent';
import InputField from 'shared/ui/inputs/textField/StyledTextField ';
import { useNavigate } from 'react-router-dom';
 const data = [
  { img: logoAdmin },
  { img: logoAdmin },
  { img: logoAdmin },
  { img: logoAdmin },
  { img: logoAdmin },
  { img: logoAdmin },
  { img: logoAdmin },
  { img: logoAdmin },
  { img: logoAdmin },
  { img: logoAdmin }
 ];

 interface ProjectInfoProps {
  // open: boolean;
  // handleClose: () => void;
 }

  const ProjectDetail:React.FC <ProjectInfoProps> = () => {
    const [ openModal, setOpenModal] = React.useState(false);
    const [value, setValue] = React.useState<string | null>(null);
    const [name, setName] = React.useState<string | null>(null);
    const [email, setEmail] = React.useState<string | null>(null);
    const remainingImagesCount = data.length - 4;
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
     <ProjectDiv>
       <BackInfo>
           <img src={BackIcon} alt="BackIcon" onClick={()=> navigate(-1)}/>
           <p>Информация о проекте</p>
         </BackInfo>
        <TitileProject>Computer store</TitileProject>
        <DateBlock>
            <DateStart>11.04.2024</DateStart>
            <DateEnd>11.04.2024</DateEnd>
        </DateBlock>

        <Participants>
             <ParticipantsTitle>Участники: </ParticipantsTitle>

            <ParticipantsBlock>
              <ImagesBlock>
                {data.slice(0 , 5).map((item, index) => (
                <Image key={index} src={item.img} alt={`profile-${index}`} index={index} />
                ))}
                {remainingImagesCount > 0 && (
                <ImageLength>
                  +{remainingImagesCount}
                </ImageLength>
                
               )}
              
              </ImagesBlock>
            </ParticipantsBlock>
            <ImageAdd 
              src={userCicleAdd} 
              alt="userAdd" 
              onClick={handleOpen}
             />
            {openModal && 
              <MiniModalComponent 
              open={openModal} 
              handleClose={handleClose} 
              title='Добавление пользователей в проект <<Computer store>>' >
                 <InputBlock>
                 <InputField
                  label="ФИО*"
                  value={name} 
                  setValue={setName} 
                   type="text"
                  />

                  <InputField
                  label="Email*"
                  value={email} 
                  setValue={setEmail} 
                   type="email"
                  />
                 </InputBlock>
              </MiniModalComponent> 
               }
        </Participants>

        <ListFlexDirection>
            <Label>Описание*</Label>  
            <TextAreaField  
            label='Описание*'
             value={value} 
             setValue={setValue}
              height='293px'
              />
      </ListFlexDirection>
     </ProjectDiv>
   )
 }
 
 export default ProjectDetail;