import React, { FormEvent, useState } from "react";
import { IconButton, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "app/store";
import {
  LoginContainer,
  FormStyled,
  MyInput,
  MyCheckbox,
  CheckBoxLogin,
  LoginButton,
} from "./style";

// UI
import LoginCheck from "shared/ui/checkbox";

// hook
import useValidation from "../hook/useValidation";
import { login } from "../store/actions";
import LoadingButton from "shared/ui/loadingButton";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { formik, handleRememberMe, rememberMe } = useValidation();
  const { loading, error } = useAppSelector((state) => ({
    loading: (state.login.login.status === "loading"),
    error: state.login.login.message,
  }));

  const handleClickShow = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = formik.values;

    await dispatch(login({ user: { email, password }, navigate }));
  };

  return (
    <LoginContainer>
      <FormStyled onSubmit={handleSubmit}>
        <h2>Войти</h2>
        <MyInput>
          <p>Email*</p>
          <TextField
            id="email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && Boolean(formik.errors.email)}
            sx={{
              height: "35px",
              "& .MuiInputBase-root": {
                height: "35px",
                padding: "0",
              },
              "& .MuiInputBase-input": {
                height: "35px",
                padding: "0 14px",
              },
            }}
          />
        </MyInput>
        <MyInput>
          <p>Пароль*</p>
          <TextField
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={
              formik.touched.password && Boolean(formik.errors.password)
            }
            sx={{
              height: "35px",
              "& .MuiInputBase-root": {
                height: "35px",
                padding: "0",
              },
              "& .MuiInputBase-input": {
                height: "35px",
                padding: "0 14px",
              },
            }}
          />
          <IconButton
            onClick={handleClickShow}
            style={{
              position: "absolute",
              right: "10px",
              top: "22px",
            }}
          >
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </MyInput>
        <MyCheckbox>
          <CheckBoxLogin>
            <LoginCheck change={handleRememberMe} checked={rememberMe} />
            <p>Запомнить</p>
          </CheckBoxLogin>
          <p>Забыли пароль ?</p>
        </MyCheckbox>
        <LoginButton type="submit">
          {loading ? <LoadingButton /> : "Войти"}
        </LoginButton>
      </FormStyled>
    </LoginContainer>
  );
};

export default Login;
