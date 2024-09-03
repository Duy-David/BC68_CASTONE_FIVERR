import { http } from "./config";

export const congViecService = {
  layCongViecTheoTen: (data) => {
    return http.get(`/cong-viec/lay-danh-sach-cong-viec-theo-ten/${data}`);
  },
  layCongViec: () => {
    return http.get("/cong-viec");
  },
  layCongViecChiTietTheoLoai: (maChiTietLoai) => {
    return http.get(
      `/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${maChiTietLoai}`
    );
  },
  layMenuTheoLoaiCongViec: () => {
    return http.get("/cong-viec/lay-menu-loai-cong-viec");
  },
  layCongViecTheoLoai: (maChiTietLoai) => {
    return http.get(
      `/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${maChiTietLoai}`
    );
  },
};
