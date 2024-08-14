import React from "react";
import {
  ContainerPopup,
  ContentPopup,
  DirectionButton,
  DirectionInput,
  DirectionTexterea,
  DirrectionPost,
} from "./style";

//SVG
import closeSvg from "../../assets/svg/closePopup.svg";
import { useOutSideClick } from "shared/hooks/useOutSideClick";

type Props = {
  closePopup: () => void;
};

const Popup: React.FC<Props> = ({ closePopup }) => {
  const { ref } = useOutSideClick(closePopup);
  return (
    <ContainerPopup >
      <ContentPopup className="overlay" ref={ref}>
        <h2>Создать направления</h2>
        <DirrectionPost>
          <DirectionInput>
            <p>Название*</p>
            <input type="text" />
          </DirectionInput>
          <DirectionTexterea>
            <p>Описание*</p>
            <textarea rows={14} cols={76}></textarea>
          </DirectionTexterea>
          <DirectionButton>
            <button onClick={closePopup}>
              <img src={closeSvg} alt="close svg" />
              <p>Отмена</p>
            </button>
            <button>
              <span>+</span>
              <p>Сохранить</p>
            </button>
          </DirectionButton>
        </DirrectionPost>
      </ContentPopup>
    </ContainerPopup>
  );
};

export default Popup;
