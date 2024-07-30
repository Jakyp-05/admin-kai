import React, { useState } from "react";
import { IconButton, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
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

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { formik, handleRememberMe, rememberMe } = useValidation();

  const handleClickShow = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <LoginContainer>
      <FormStyled onSubmit={formik.handleSubmit}>
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
        <LoginButton type="submit">Войти</LoginButton>
      </FormStyled>
    </LoginContainer>
  );
};

export default Login;
