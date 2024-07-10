import React from "react";
import { Container as MuiContainer } from "./Container.styles";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <MuiContainer>{children}</MuiContainer>;
};

export default Container;
