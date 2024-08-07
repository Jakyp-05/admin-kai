import {FieldErrors, UseFormRegisterReturn} from 'react-hook-form'

export interface AddInternModalProps {
    open: boolean;
    onClose: () => void;
  }
  
 export interface FormData {
    firstName: string;
    lastName: string;
    email?: string;
    phone?: string;
    direction: string;
    status: string;
    // options: { value: string, label: string }[];
    options: Option[];
    register: UseFormRegisterReturn;

  }

  // export interface FormDataNew {
  //   register: UseFormRegisterReturn;
  // }

 export interface Option {
    value: string;
    label: string;
    
  }

    export interface InputFieldProps {
      label: string;
      name: string; 
      register: UseFormRegisterReturn;
      value: string;
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
      error?: FieldErrors;
    }