import React from 'react';
import { TextField, MenuItem, TextFieldProps } from '@mui/material';
import styled from 'styled-components';
import { SelectFieldProps } from './type';

const StyledSelectField = styled(TextField)`
  & .MuiInputBase-root {
    font-size: 16px;
    color: #000;
    background-color: #fff;
    border-radius: 8px;
     width:287px;
      height:35px;
       
  }

  & .MuiInputLabel-root {
    font-size: 14px;
    color: #888;
   
  }

  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #3f51b5;
       width:287px;
      height:35px;
    
    }

  }
`;


const SelectField: React.FC<SelectFieldProps> = ({ label, options, ...props }) => (
  <StyledSelectField label="" select variant="outlined" {...props}>
    {options?.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </StyledSelectField>
);

export default SelectField;
