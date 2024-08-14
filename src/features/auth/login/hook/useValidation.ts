import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as yup from "yup";

const useValidation = () => {
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Введите корректный email")
      .matches(
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
        "Email должен соответсвовать шаблону"
      )
      .required("Email обязательно"),
    password: yup
      .string()
      .min(8, "Пароль должен содержить минимум 8 символов")
      .required("Пароль обязательно"),
  });

  useEffect(() => {
    const rememberedEmail = localStorage.getItem("email");
    const rememberedPassword = localStorage.getItem("password");
    const rememberedMe = localStorage.getItem("rememberMe") === "true";

    if (rememberedEmail && rememberedPassword && rememberedMe) {
      formik.setValues({
        email: rememberedEmail,
        password: rememberedPassword,
      });
      setRememberMe(rememberedMe);
    }
  }, []);

  const handleRememberMe = () => {
    setRememberMe((prevRememberMe) => !prevRememberMe);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);

      if (rememberMe) {
        localStorage.setItem("email", values.email);
        localStorage.setItem("password", values.password);
      } else {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
      }
      localStorage.setItem("rememberMe", rememberMe.toString());

      resetForm();
    },
  });

  return { formik, handleRememberMe, rememberMe };
};

export default useValidation;
