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
import EditService from "shared/ui/editService/EditService"
import { deleteService } from '../store/actions';


const Service: React.FC = () => {
    const [popup, setPopup] = useState<boolean>(false);
    const [informationPopup, setInformationPopup] = useState<boolean>(false)
    const [editPopup, setEditPopup] = useState<boolean>(false)
    const [serviceId, setServiceId] = useState<number | null>(null);
    const dispatch = useDispatch<AppDispatch>();
    const services = useSelector(selectService);

    useEffect(() => {
        dispatch(getAllServices());
    }, [services]);

    const handlePopup = () => {
        setPopup(true);
    };

    const handleInformationPopup = () => {
        setInformationPopup(true)
    }

    const handleInformation = (id: number) => {
        setServiceId(id)
    }

    const handleDelete = (id: number) => {
        dispatch(deleteService({ id }));
    };

    const handleEdit = (id: number) => {
        setServiceId(id)
    }

    return (
        <ServiceContainer>
            <ServiceHead>
                <h2>Услуги</h2>
                <AddButton openPopup={handlePopup} />
                {popup && <CreateService closePopup={() => setPopup(false)} />}
            </ServiceHead>
            <ServiceBody>
                {informationPopup && serviceId && (
                    <ServiceInformation
                        closePopup={() => setInformationPopup(false)}
                        id={serviceId}
                    />
                )}

                {editPopup && serviceId && (
                    <EditService
                        closePopup={() => setEditPopup(false)}
                        id={serviceId}
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
                                <tr key={el.id}>
                                    <td onClick={() => {
                                        handleInformationPopup()
                                        handleInformation(el.id)
                                    }}>{el.title}</td>
                                    <td onClick={() => {
                                        handleInformationPopup()
                                        handleInformation(el.id)
                                    }}>
                                        <p>
                                            {el.description}
                                        </p>
                                    </td>
                                    <td onClick={() => {
                                        handleInformationPopup()
                                        handleInformation(el.id)
                                    }}>{`${el.price} сом`}</td>
                                    <td>
                                        <Icons >
                                            <span onClick={() => handleDelete(el.id)}>
                                                <img src={deleteSvg} alt="delete icon" />
                                            </span>
                                            <span onClick={()=>{
                                                setEditPopup(true)
                                                handleEdit(el.id)
                                            }}>
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