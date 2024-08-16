export interface TextAreaFieldProps {
    label: string;
    height: string;
    value:string | null; 
    setValue: React.Dispatch<React.SetStateAction<string | null>>;
  }