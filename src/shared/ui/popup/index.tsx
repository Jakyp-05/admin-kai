import React from "react";
import { Popup as MuiPopup } from "./styles";

const Popup: React.FC = () => {
  return (
    <MuiPopup>
      <input type="checkbox" />
      <p>Text</p>
    </MuiPopup>
  );
};

export default Popup;
