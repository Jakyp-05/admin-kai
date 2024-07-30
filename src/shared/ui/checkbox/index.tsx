import React, { ChangeEvent } from "react";
import "./style.css";

type Props = {
    change: (event: ChangeEvent<HTMLInputElement>) => void;
    checked: boolean;
};

const LoginCheck: React.FC<Props> = ({ change, checked }) => {
  return (
    <input
      onChange={change}
      checked={checked}
      type="checkbox"
      className="switch_1"
    />
  );
};

export default LoginCheck;
