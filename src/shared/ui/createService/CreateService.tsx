import React from "react";
import {
    ContainerPopup,
    ContentPopup,
    ServiceButton,
    ServiceInputWrap,
    ServiceInput,
    ServiceTexterea,
    ServicePost,
} from "./style";

//SVG
import closeSvg from "../../assets/svg/closePopup.svg";
import {useOutSideClick} from "shared/hooks/useOutSideClick";

type Props = {
    closePopup: () => void;
};

const CreateService: React.FC<Props> = ({closePopup}) => {
    const {ref} = useOutSideClick(closePopup);
    return (
        <ContainerPopup>
            <ContentPopup className="overlay" ref={ref}>
                <h2>Создать услугу</h2>
                <ServicePost>
                    <ServiceInputWrap>
                        <ServiceInput>
                            <p>Название*</p>
                            <input type="text"/>
                        </ServiceInput>
                        <ServiceInput>
                            <p>Цена*</p>
                            <input type="number"/>
                        </ServiceInput>
                    </ServiceInputWrap>
                    <ServiceTexterea>
                        <p>Описание*</p>
                        <textarea rows={14} cols={76}></textarea>
                    </ServiceTexterea>
                    <ServiceButton>
                        <button onClick={closePopup}>
                            <img src={closeSvg} alt="close svg"/>
                            <p>Отмена</p>
                        </button>
                        <button>
                            <span>+</span>
                            <p>Сохранить</p>
                        </button>
                    </ServiceButton>
                </ServicePost>
            </ContentPopup>
        </ContainerPopup>
    );
};

export default CreateService;
