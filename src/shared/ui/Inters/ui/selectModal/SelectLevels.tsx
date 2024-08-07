import React from "react";
import styled from "styled-components";
import { Option } from '../../ui/InputAndSelect/modalInters/TypesModal';


export const Label = styled.label`
  display: block;
  margin: 20px 0 0;
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

interface SelectFieldProps {
  label: string;
  id?: string; 
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
}

export const SelectFieldLevel: React.FC<SelectFieldProps> = ({ label, id, name, value, onChange, options }) => (
  <LabelSelect>
    {/* <Label htmlFor={id}>{label}</Label> */}
   
   <Select id={id} name={name} value={value} onChange={onChange}>
      <option value="">{`Выберите ${label.toLowerCase()}`}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
   
   </Select>
     
  </LabelSelect>
);
