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
import { useOutSideClick } from "shared/hooks/useOutSideClick";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAppDispatch } from "app/store";
import { postService } from "features/service/store/actions";

const CreateService: React.FC<{ closePopup: () => void }> = ({ closePopup }) => {
    const dispatch = useAppDispatch();
    const { ref } = useOutSideClick(closePopup);

    const validationSchema = yup.object({
        title: yup.string().required("Название обязательно"),
        description: yup.string().required("Описание обязательно"),
        price: yup.number().required("Цена обязательна").positive("Цена должна быть положительным числом"),
    });

    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            price: 0,
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                await dispatch(postService({ service: values })).unwrap();
                resetForm();
                closePopup();
            } catch (error) {
                console.error("Error submitting form:", error);
                alert("Произошла ошибка при отправке данных. Попробуйте снова.");
            }
        },
    });

    return (
        <ContainerPopup>
            <ContentPopup className="overlay" ref={ref}>
                <h2>Создать услугу</h2>
                <ServicePost onSubmit={formik.handleSubmit}>
                    <ServiceInputWrap>
                        <ServiceInput>
                            <p>Название*</p>
                            <input
                                type="text"
                                name="title"
                                onChange={formik.handleChange}
                                value={formik.values.title}
                            />
                            {formik.errors.title && <div>{formik.errors.title}</div>}
                        </ServiceInput>
                        <ServiceInput>
                            <p>Цена*</p>
                            <input
                                type="number"
                                name="price"
                                onChange={formik.handleChange}
                                value={formik.values.price}
                            />
                            {formik.errors.price && <div>{formik.errors.price}</div>}
                        </ServiceInput>
                    </ServiceInputWrap>
                    <ServiceTexterea>
                        <p>Описание*</p>
                        <textarea
                            rows={14}
                            cols={76}
                            name="description"
                            onChange={formik.handleChange}
                            value={formik.values.description}
                        />
                        {formik.errors.description && <div>{formik.errors.description}</div>}
                    </ServiceTexterea>
                    <ServiceButton>
                        <button type="button" onClick={closePopup}>
                            <img src={closeSvg} alt="close svg" />
                            <p>Отмена</p>
                        </button>
                        <button type="submit">
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
