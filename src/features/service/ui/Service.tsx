import React, {useState} from 'react'
import {ServiceBody, ServiceContainer, ServiceHead, Icons} from './styles'
import AddButton from "shared/ui/addButton";
import CreateService from "shared/ui/createService/CreateService";
import deleteSvg from "shared/assets/svg/delete.svg";
import editSvg from "shared/assets/svg/edit.svg";
import ServiceInformation from "shared/ui/serficeInformation/ServiceInformation";

interface BackendData {
    id: number;
    name: string;
    description: string;
    price: number;
}

const Service: React.FC = () => {
    const [popup, setPopup] = useState<boolean>(false);
    const [informationPopup, setInformationPopup] = useState<boolean>(false)
    const [serviceInfo, setServiceInfo] = useState<BackendData | null>(null);
    const handlePopup = () => {
        setPopup(true);
    };

    const handleInformationPopup = () => {
        setInformationPopup(true)
    }

    const handleInformation = (data: BackendData) => {
        setServiceInfo(data)
    }
    return (
        <ServiceContainer>
            <ServiceHead>
                <h2>Услуги</h2>
                <AddButton openPopup={handlePopup}/>
                {popup && <CreateService closePopup={() => setPopup(false)}/>}
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
                    <tr onClick={() => {
                        handleInformationPopup()
                        handleInformation({
                            id: 1,
                            name: "Стажировка",
                            description: "ТекстТекст Текст ТекстТекст ТекстТекст Текст Текст Текст Текст ТекстТекст......",
                            price: 16000
                        })
                    }}>
                        <td>Стажировка</td>
                        <td>
                            <p>
                                ТекстТекст Текст ТекстТекст ТекстТекст Текст Текст Текст Текст ТекстТекст......
                            </p>
                        </td>
                        <td>16000сом</td>
                        <td>
                            <Icons>
                        <span>
                        <img src={deleteSvg} alt="delete icon"/>
                    </span>
                                <span>
                    <img src={editSvg} alt="edit icon"/>
                  </span>
                            </Icons>
                        </td>
                    </tr>

                    <tr onClick={() => {
                        handleInformationPopup()
                        handleInformation({
                            id: 1,
                            name: "Стажировка",
                            description: "ТекстТекст Текст ТекстТекст ТекстТекст Текст Текст Текст Текст ТекстТекст......",
                            price: 16000
                        })
                    }}>
                        <td>Менторство</td>
                        <td>
                            <p>
                                ТекстТекст Текст ТекстТекст ТекстТекст Текст Текст Текст Текст ТекстТекст......
                            </p>
                        </td>
                        <td>16000сом</td>
                        <td>
                            <Icons>
                  <span>
                    <img src={deleteSvg} alt="delete icon"/>
                  </span>
                                <span>
                    <img src={editSvg} alt="edit icon"/>
                  </span>
                            </Icons>
                        </td>
                    </tr>

                    <tr onClick={() => {
                        handleInformationPopup()
                        handleInformation({
                            id: 1,
                            name: "Стажировка",
                            description: "ТекстТекст Текст ТекстТекст ТекстТекст Текст Текст Текст Текст ТекстТекст......",
                            price: 16000
                        })
                    }}>
                        <td>Стажировка</td>
                        <td>
                            <p>
                                ТекстТекст Текст ТекстТекст ТекстТекст Текст Текст Текст Текст ТекстТекст......
                            </p>
                        </td>
                        <td>16000сом</td>
                        <td>
                            <Icons>
                  <span>
                    <img src={deleteSvg} alt="delete icon"/>
                  </span>
                                <span>
                    <img src={editSvg} alt="edit icon"/>
                  </span>
                            </Icons>
                        </td>
                    </tr>

                    <tr onClick={() => {
                        handleInformationPopup()
                        handleInformation({
                            id: 1,
                            name: "Стажировка",
                            description: "ТекстТекст Текст ТекстТекст ТекстТекст Текст Текст Текст Текст ТекстТекст......",
                            price: 16000
                        })
                    }}>
                        <td>Менторство</td>
                        <td>
                            <p>
                                ТекстТекст Текст ТекстТекст ТекстТекст Текст Текст Текст Текст ТекстТекст......
                            </p>
                        </td>
                        <td>16000сом</td>
                        <td>
                            <Icons>
                  <span>
                    <img src={deleteSvg} alt="delete icon"/>
                  </span>
                                <span>
                    <img src={editSvg} alt="edit icon"/>
                  </span>
                            </Icons>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </ServiceBody>
        </ServiceContainer>
    )
}

export default Service