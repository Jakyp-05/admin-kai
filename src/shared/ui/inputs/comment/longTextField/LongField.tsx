import React from 'react';
import { styled } from '@mui/material';
import { InputFieldProps } from './type';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledLabel = styled('label')`
  font-family: 'sans-serif, Montserrat';
font-size: 15px;
font-weight: 500;
text-align: left;
color:rgba(51, 51, 80, 1);

`;

const StyledTextField = styled('input')`
  font-size: 16px;
  color: #000;
  background-color: #fff;
  border-radius: 8px;
  padding: 0 0 0 5px ;
  width: 483px;
  height: 35px;
   border: 1px solid rgba(39, 49, 56, 0.51);
  &:focus {
    outline:1px solid rgba(39, 49, 56, 0.51);
    border: 1px solid rgba(39, 49, 56, 0.51);
  }
    &:hover {
      outline: 1px solid #000;
    }
`;



const LongInputField: React.FC<InputFieldProps> = ({ label, email, setValue }) => (
  <Wrapper>
    <StyledLabel htmlFor="input-field">{label}</StyledLabel>
    <StyledTextField  
      id="input-field"
      placeholder={label}      value={email || ''} 
      onChange={(event) => setValue(event.target.value)}
    />
  </Wrapper>
);

export default LongInputField;
