import { http } from "./config";

export const nguoiDungService = {
  getAllUsers: () => {
    return http.get("/users");
  },
  deleteUser: (id) => {
    return http.delete(`/users?id=${id}`);
  },
  getUser: (id) => {
    return http.get(`/users/${id}`);
  },
  updateUser: (id, data) => {
    return http.put(`/users/${id}`, data);
  },
};
