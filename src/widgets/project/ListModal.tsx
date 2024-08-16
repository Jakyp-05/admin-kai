import { styled } from '@mui/material';
import React, { useState } from 'react';
import TextAreaField from 'shared/ui/inputs/comment/Comment';
import DatePickerField from 'shared/ui/inputs/dataField/DatePickerField';
import SelectField from 'shared/ui/inputs/select/Select';
import InputField from 'shared/ui/inputs/textField/StyledTextField ';
import dayjs, { Dayjs } from 'dayjs';
import LongInputField from 'shared/ui/inputs/comment/longTextField/LongField';


const ListModalStyle = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  // alignItems: 'center',
  justifyContent:'center',
  gap: '25px',  
  paddingTop:'15px'

})

const ListFlexDirection = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
})

const ListBlock  = styled('div')({
  display: 'flex',
  alignItems:'center',
  justifyContent:'space-between',
  gap: '55px',
})

export const Label = styled('label')`
  font-family: 'sans-serif, Montserrat';
font-size: 15px;
font-weight: 500;
text-align: left;
color:rgba(51, 51, 80, 1);

`;


const ListModal: React.FC = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs(null));
  const [ email , setEmail] =React.useState<string | null> (null);
  const [ project , setProject] =React.useState<string | null> (null);
  const [comment , setComment ] = React.useState<string | null> (null);
  // const [startDate, setStartDate] = useState<Date | null>(null);
  // const [endDate, setEndDate] = useState<Date | null>(null);
  const [projectType, setProjectType] = useState<string>('');
  const handleClick = () => {
    alert(value)
  }
  return (
    < ListModalStyle>
     <ListBlock>
        <InputField
         label="Название проекта*"
          value={project} 
          setValue={setProject} 
          type="text"
         />
      
      <ListFlexDirection>
        <Label>Тип проекта*</Label>
        <SelectField
        label="Тип проекта*"
        value={projectType}
        onChange={(e) => setProjectType(e.target.value)}
        options={[
          { label: 'Тип 1', value: 'type1' },
          { label: 'Тип 2', value: 'type2' },
        ]}
      />
      </ListFlexDirection>

     </ListBlock>
      
      <ListFlexDirection>
      <Label>Описание*</Label>  
      <TextAreaField
       label="Описание*" 
       height="169px"
       value={comment}
       setValue={setComment}
       />
      </ListFlexDirection>
      

      {/* <ListBlock> */}
      {/* <DatePickerField
        label="Дата начала*"
        value={startDate}
        onChange={(newValue) => setStartDate(newValue)}
      />
      <DatePickerField
        label="Дата завершения*" 
        value={endDate}
        onChange={(newValue) => setEndDate(newValue)}
      /> */}
      {/* </ListBlock> */}

      <DatePickerField
       value={value} 
       setValue={setValue} 
       labelStart = 'Дата начала*' 
       labelEnd = "Дата завершения*" />

      <LongInputField 
        email={email}
        setValue={setEmail}
        label="ФИО или email"  
      /> 
   
      
    </ListModalStyle>
  );
};

export default ListModal;
