import React from 'react';
import styled from 'styled-components';

const TextField = styled.input`
  width: 287px;
  padding: 10px;
  margin: 5px 0 0;
  box-sizing: border-box;
  border: 1px solid rgba(39, 49, 56, 0.51);
  background: rgba(151, 153, 154, 0.08);
  border-radius: 8px;
  font-size: 16px;
`;

const LabelText = styled.div``;

export const Label = styled.label`;
  display: block;
  margin: 30px 0 0;
  color: rgba(51, 51, 80, 1);
  font-size: 15px;
  font-weight: 500;
  font-family: 'sans-serif, Montserrat';
`;

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: React.ReactNode;
}

export const InputField: React.FC<InputFieldProps> = ({ label, error, ...props }) => (
  <LabelText>
    <Label htmlFor={props.name}>{label}</Label>
    <TextField {...props} />
    {error}
  </LabelText>
);
