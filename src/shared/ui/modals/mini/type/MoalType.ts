import { ReactNode } from "react";

export interface ModalComponentProps {
  open: boolean;
  handleClose: () => void;
  title?: string;
  children?: ReactNode;
  
}