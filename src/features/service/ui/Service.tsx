import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllServices } from "../store/actions";
import { AppDispatch, RootState } from "app/store";
import { selectService } from "../store/selector";
import { ServiceBody, ServiceContainer, ServiceHead, Icons } from './styles'
import AddButton from "shared/ui/addButton";
import CreateService from "shared/ui/createService/CreateService";
import deleteSvg from "shared/assets/svg/delete.svg";
import editSvg from "shared/assets/svg/edit.svg";
import ServiceInformation from "shared/ui/serficeInformation/ServiceInformation";
import { ServiceRes } from '../type';

const Service: React.FC = () => {
    const [popup, setPopup] = useState<boolean>(false);
    const [informationPopup, setInformationPopup] = useState<boolean>(false)
    const [serviceInfo, setServiceInfo] = useState<ServiceRes | null>(null);
    const dispatch = useDispatch<AppDispatch>();
    const services = useSelector(selectService);

    useEffect(() => {
        dispatch(getAllServices());
    }, [dispatch]);

    const handlePopup = () => {
        setPopup(true);
    };

    const handleInformationPopup = () => {
        setInformationPopup(true)
    }

    const handleInformation = (data: ServiceRes) => {
        setServiceInfo(data)
    }

    return (
        <ServiceContainer>
            <ServiceHead>
                <h2>Услуги</h2>
                <AddButton openPopup={handlePopup} />
                {popup && <CreateService closePopup={() => setPopup(false)} />}
            </ServiceHead>
            <ServiceBody>
                {informationPopup && serviceInfo && (
                    <ServiceInformation
                        closePopup={() => setInformationPopup(false)}
                        data={serviceInfo}
                    />
                )}
                <table>
                    <thead>
                        <tr>
                            <th>Название услуги</th>
                            <th>Описание</th>
                            <th>Цена</th>
                            <th>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services && services.map(el => {
                            return (
                                <tr onClick={() => {
                                    handleInformationPopup()
                                    handleInformation(el)
                                }}>
                                    <td>{el.title}</td>
                                    <td>
                                        <p>
                                            {el.description}
                                        </p>
                                    </td>
                                    <td>{`${el.price} сом`}</td>
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
                            )
                        })}
                    </tbody>
                </table>
            </ServiceBody>
        </ServiceContainer>
    )
}

export default Service