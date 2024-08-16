import { apiRoot } from "shared/api/api";
import { ServiceReq, ServiceRes } from "../project/ui/type";

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

  getService: (id: number) => {
    const token = localStorage.getItem('token');
    return apiRoot.get<ServiceRes>(`services/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
  },

  deleteService: (id: number) => {
    const token = localStorage.getItem('token');
    return apiRoot.delete(`services/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
  },
  editService: (id: number, data: ServiceReq) => {
    const token = localStorage.getItem('token');
    return apiRoot.put<ServiceRes>(`services/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
  },
};