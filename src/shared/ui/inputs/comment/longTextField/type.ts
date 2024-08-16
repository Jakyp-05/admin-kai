import { TextFieldProps } from "@mui/material";

export interface InputFieldProps  {
    label: string;
    email:string | null; 
    // setValue: (newValue: string | null) => void;
    setValue: React.Dispatch<React.SetStateAction<string | null>>;
    
  }