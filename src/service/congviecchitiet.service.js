import { http } from "./config";

export const congViecChiTietService = {
  layCongViecChiTiet: (maCongViec) => {
    return http.get(`/cong-viec/lay-cong-viec-chi-tiet/${maCongViec}`);
  },
  layBinhLuanTheoCongViec: (maCongViec) => {
    return http.get(`/binh-luan/lay-binh-luan-theo-cong-viec/${maCongViec}`);
  },
  binhLuanPost: (data) => {
    return http.post(`/binh-luan`, data);
  },
  thueCongViec: () => {
    return http.post(`/thue-cong-viec`);
  },
};
