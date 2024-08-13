import React, { useEffect } from 'react';
import {
    ContainerPopup,
    ContentPopup,
    PopupHeader,
    ServiceInformation,
    ServiceInformationDescription
} from "./style";
import backSvg from "../../assets/svg/arrowLeft.svg";
import { useOutSideClick } from "shared/hooks/useOutSideClick";
import { RootState } from 'app/store';
import { getService } from 'features/service/store/actions';
import { resetSelectedService } from 'features/service/store/slice';
import { useAppDispatch, useAppSelector } from 'app/store';

type Props = {
    closePopup: () => void;
    id: number;
};

const ServiceInfo: React.FC<Props> = ({ closePopup, id }) => {
    const { ref } = useOutSideClick(closePopup);
    const dispatch = useAppDispatch();
    const service = useAppSelector((state: RootState) => state.service.selectedService);

    useEffect(() => {
        if (id) {
            dispatch(getService({ id }));
        }
    }, [dispatch, id]);
    console.log(service)
    return (
        <ContainerPopup>
            <ContentPopup className="overlay" ref={ref}>
                <PopupHeader>
                    <button onClick={() => {
                        closePopup()
                        dispatch(resetSelectedService())
                    }}>
                        <img src={backSvg} alt="close svg" />
                    </button>
                    <h2>Информация о направлении</h2>
                </PopupHeader>
                {service && <ServiceInformation>
                    <h3>{service.title}</h3>
                    <div>
                        <h4>Цена:</h4>
                        <span>{service.price}</span>
                    </div>
                    <ServiceInformationDescription>
                        <h6>Описание</h6>
                        <p>{service.description}</p>
                    </ServiceInformationDescription>
                </ServiceInformation>}
            </ContentPopup>
        </ContainerPopup>
    );
};

export default ServiceInfo;