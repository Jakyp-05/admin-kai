import React from 'react';
import { styled, TextField } from '@mui/material';
import { TextAreaFieldProps } from './type';

interface StyledTextAreaFieldProps {
  height?: string;
}

const StyledTextAreaField = styled(TextField) <StyledTextAreaFieldProps>`
  & .MuiInputBase-root {
    font-size: 16px;
    color: #000;
    background-color: #fff;
    border-radius: 8px;
    width:100%;
   height: ${(props) => props?.height || '169px'};
    border: 1px solid rgba(39, 49, 56, 0.51);
  }

  & .MuiInputLabel-root {
  padding:0;
    font-size: 14px;
    color: #888;
  }

  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      padding:0;
      border-color: #3f51b5;
      width:100%;
   height: ${(props) => props?.height || '169px'};
    }
  }
    & .MuiInputBase-input-MuiOutlinedInput-input{
      padding:0;
       font-size:18px;
       fon-weight:500;
    }
`;


const TextAreaField: React.FC<TextAreaFieldProps & StyledTextAreaFieldProps> = ({ height, value , setValue }) => (
  <StyledTextAreaField
    value={value }
    onChange={(event) => setValue(event.target.value)}
    height={height} 
    variant="outlined"
    multiline
    rows={4}
    
  />
);

export default TextAreaField;
