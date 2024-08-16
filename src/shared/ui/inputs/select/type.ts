import { TextField, MenuItem, TextFieldProps } from '@mui/material';

export interface Option {
  label: string;
  value: string;
}

export interface SelectFieldProps extends Omit<TextFieldProps, 'value' | 'onChange'> {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options: Option[];
}
