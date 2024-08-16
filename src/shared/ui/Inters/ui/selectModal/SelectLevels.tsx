import React from "react";
import styled from "styled-components";
import { Option } from '../../ui/InputAndSelect/modalInters/TypesModal';
import { SelectFieldProps } from "./type";


export const Label = styled.label`
  display: block;
  margin: 10px 0 0;
   color:rgba(51, 51, 80, 1);
  font-size: 15px;
  font-weight: 500;
  font-family:'sans-serif, Montserrat';
`;

const Select = styled.select`
  width: 79px;
  padding: 10px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid rgba(39, 49, 56, 0.51);
  background:rgba(151, 153, 154, 0.08);
  border-radius: 8px;
  font-size: 16px;

`;



const LabelSelect = styled.div`

`;



export const SelectFieldLevel: React.FC<SelectFieldProps> = ({label, options, error, ...props }) => (
  <LabelSelect>
    {/* <Label htmlFor={id}>{label}</Label> */}
   
   <Select {...props}>
      <option value="">{`Выберите ${label.toLowerCase()}`}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
   
   </Select>
   {error}
  </LabelSelect>
);
