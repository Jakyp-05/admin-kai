import React, { useState } from "react";
import {
  DirectionContainer,
  DirectionHead,
  DirectionBody,
  Icons,
} from "./styles";
import AddButton from "shared/ui/addButton";

// SVG
import deleteSvg from "shared/assets/svg/delete.svg";
import editSvg from "shared/assets/svg/edit.svg";
import Popup from "shared/ui/popup/Popup";
import { useOutSideClick } from "shared/hooks/useOutSideClick";

const Direction: React.FC = () => {
  const [popup, setPopup] = useState<boolean>(false);

  const handlePopup = () => {
    setPopup(true);
  };

  return (
    <DirectionContainer>
      <DirectionHead>
        <h2>Направления</h2>
        <AddButton openPopup={handlePopup} />

        {popup && <Popup closePopup={() => setPopup(false)} />}
      </DirectionHead>
      <DirectionBody>
        <table>
          <thead>
            <tr>
              <th>Название</th>
              <th>Описание</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>JavaScript</td>
              <td>
                <p>
                  ТекстТекст Текст ТекстТекст ТекстТекст Текст Текст Текст Текст
                  ТекстТекст
                </p>
              </td>
              <td>
                <Icons>
                  <span>
                    <img src={deleteSvg} alt="delete icon" />
                  </span>
                  <span>
                    <img src={editSvg} alt="edit icon" />
                  </span>
                </Icons>
              </td>
            </tr>

            <tr>
              <td>Java</td>
              <td>
                <p>
                  ТекстТекст Текст ТекстТекст ТекстТекст Текст Текст Текст Текст
                  ТекстТекст
                </p>
              </td>
              <td>
                <Icons>
                  <span>
                    <img src={deleteSvg} alt="delete icon" />
                  </span>
                  <span>
                    <img src={editSvg} alt="edit icon" />
                  </span>
                </Icons>
              </td>
            </tr>

            <tr>
              <td>Flutter</td>
              <td>
                <p>
                  ТекстТекст Текст ТекстТекст ТекстТекст Текст Текст Текст Текст
                  ТекстТекст
                </p>
              </td>
              <td>
                <Icons>
                  <span>
                    <img src={deleteSvg} alt="delete icon" />
                  </span>
                  <span>
                    <img src={editSvg} alt="edit icon" />
                  </span>
                </Icons>
              </td>
            </tr>
          </tbody>
        </table>
      </DirectionBody>
    </DirectionContainer>
  );
};

export default Direction;
