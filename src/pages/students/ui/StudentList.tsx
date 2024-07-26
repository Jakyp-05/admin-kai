import React from "react";
import { StudentContent } from "../style/style";
import { styled } from '@mui/system';
import { TextField } from "@mui/material";
import Sort from "componets/Sort";

const StudentComponent = styled('div')({
  color: 'darkslategray',
  backgroundColor: 'aliceblue',
  padding: 8,
  borderRadius: 4,
});

const StudentAdd = styled('div')({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  p: {
    color: '#333350',
    fontSize: '20px',
    fontWeight: 600,
    
  },
  paddingTop:'15px',
  margin:'0 6px 0 10px'


});

const StudentInput = styled('div')({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBottom:'20px',
  margin:'10px 6px 0 10px'
})

const TextFieldCss = styled(TextField)({
width:'250px',

})

const ButtonAdd = styled('button')({
  width: '184px',
  height: '49px',
  background: '#36CBFF',
  "&:hover": {
    background: ''
  },
  fontWeight: 600,
  fontSize: '20px',
  color: '#FCFCFC',
  borderRadius:'4px'

})



const StudentList: React.FC = () => {

  return <StudentContent>

    <StudentComponent>
      <StudentAdd>
        <p>Студенты</p>
        {/* <button>+ Создать курс</button> */}
        <ButtonAdd >+ Создать</ButtonAdd>
      </StudentAdd>
      <StudentInput>    
        <TextFieldCss id="standard-basic" label="Поиск..." variant="standard" />
        {/* <ButtonVector>Фильтер <img src={Vector} alt="" /></ButtonVector> */}
        <Sort/>
      </StudentInput>
    </StudentComponent>

  </StudentContent>
};

export default StudentList;
