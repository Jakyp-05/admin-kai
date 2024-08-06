export interface LoginReq {
  email: string;
  password: string;
}

export type LoginRes = {
  token: string;
};
