import { http } from "./config";

export const quanLyCongViecService = {
  getCongViec: () => {
    return http.get("/cong-viec");
  },
  postCongViec: (token) => {
    return http.post("/cong-viec", { headers: { token } });
  },
  gettimkiemCongViec: () => {
    return http.get("/cong-viec/phan-trang-tim-kiem");
  },
  getCongViecTheoId: (id) => {
    return http.get(`/cong-viec/${id}`);
  },
  putCongViec: (id, data, token) => {
    return http.put(`/cong-viec/${id}`, data, { headers: { token } });
  },
  deleteCongViec: (id, token) => {
    return http.delete(`/cong-viec/${id}`, { headers: { token } });
  },
  postHinhAnhCongViec: (MaCongViec, data, token) => {
    return http.post(`/cong-viec/upload-hinh-cong-viec/${MaCongViec}`, data, {
      headers: { token },
    });
  },
};
