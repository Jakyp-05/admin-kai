import { useFormik } from "formik";
import * as yup from "yup";
import { useAppDispatch } from "../../app/store";
import { postService } from "./store/actions";
import { ServiceReq } from "./type";

const useValidation = () => {
  const dispatch = useAppDispatch();

  const validationSchema = yup.object({
    title: yup
      .string()
      .required("Название обязательно"),
    description: yup
      .string()
      .required("Описание обязательно"),
    price: yup
      .number()
      .min(0, "Цена не может быть отрицательной")
      .required("Цена обязательна"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: 0,
    },
    validationSchema: validationSchema,
    onSubmit: async (values: ServiceReq, { resetForm }) => {
      try {
        const response = await dispatch(postService({ service: values })).unwrap();

        console.log("Server response:", response);

        resetForm();
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
  });

  return { formik };
};

export default useValidation;