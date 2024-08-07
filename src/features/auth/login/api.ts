import { apiRoot } from "shared/api/api";
import { LoginReq, LoginRes } from "./type";

export const apiLogin = {
  login: (data: LoginReq) => apiRoot.post<LoginRes>(`auth/sign/in`, data),
};
