export interface LoginReq {
  email: string;
  password: string;
}

export type LoginRes = {
  token: string;
};

export interface AuthState {
  isAuthenticated: boolean;
  user: any;
  token: string | null;
  loading: boolean;
  error: string | null;
}
