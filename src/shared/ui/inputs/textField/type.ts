import { TextFieldProps } from "@mui/material";

export interface InputFieldProps  {
  label: string;
  type: string;
  value:string | null; 
  setValue: React.Dispatch<React.SetStateAction<string | null>>;
  
}