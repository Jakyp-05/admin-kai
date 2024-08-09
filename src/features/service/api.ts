import { apiRoot } from "shared/api/api";
import { ServiceReq, ServiceRes } from "./type";

export const apiService = {
  postService: (data: ServiceReq) => {
    const token = localStorage.getItem('token');
    return apiRoot.post<ServiceRes>(`services/create/service`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
  },

  getAllServices: () => apiRoot.get<ServiceRes[]>(`services/find/all`),
};
