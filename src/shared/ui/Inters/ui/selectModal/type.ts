export interface Option {
    value: string;
    label: string;
}

export interface SelectFieldProps {
    label: string;
    id?: string; 
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    options: Option[];
    error?: React.ReactNode;
  }