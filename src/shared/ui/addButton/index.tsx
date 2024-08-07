import React from "react";
import "./style.css";

type Props = {
  openPopup: () => void;
};

const AddButton: React.FC<Props> = ({ openPopup }) => {
  return (
    <button className="add-button" onClick={openPopup}>
      <span>+</span>
      <p>Добавить</p>
    </button>
  );
};

export default AddButton;
