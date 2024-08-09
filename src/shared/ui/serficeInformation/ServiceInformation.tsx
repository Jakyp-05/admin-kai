import React from "react";
import {
    ContainerPopup,
    ContentPopup,
    PopupHeader,
    ServiceInformation,
    ServiceInformationDescription
} from "./style";
import backSvg from "../../assets/svg/arrowLeft.svg";
import {useOutSideClick} from "shared/hooks/useOutSideClick";
import { ServiceRes } from "features/service/type";

type Props = {
    closePopup: () => void;
    data: ServiceRes;
};

const CreateService: React.FC<Props> = ({closePopup, data}) => {
    const {ref} = useOutSideClick(closePopup);
    return (
        <ContainerPopup>
            <ContentPopup className="overlay" ref={ref}>
                <PopupHeader>
                    <button onClick={closePopup}>
                        <img src={backSvg} alt="close svg"/>
                    </button>
                    <h2>Информация о направлении</h2>
                </PopupHeader>
                <ServiceInformation>
                    <h3>{data.title}</h3>
                    <div>
                        <h4>Цена:</h4>
                        <span>{data.price}</span>
                    </div>
                    <ServiceInformationDescription>
                        <h6>Описание</h6>
                        <p>{data.description}</p>
                    </ServiceInformationDescription>
                </ServiceInformation>
            </ContentPopup>
        </ContainerPopup>
    );
};

export default CreateService;
