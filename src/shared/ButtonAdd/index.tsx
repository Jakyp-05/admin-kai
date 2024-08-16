import React from "react";
import  {ButtonAddStyle}  from "./style";

type Props = {
  openPopup?: () => void;
};

const ButtonAdd: React.FC<Props> = ({ openPopup }) => {
  return (
    <ButtonAddStyle className="add-button" onClick={openPopup}>
      <span>+</span>
      <p>Добавить</p>
    </ButtonAddStyle>
  );
};

export default ButtonAdd;
