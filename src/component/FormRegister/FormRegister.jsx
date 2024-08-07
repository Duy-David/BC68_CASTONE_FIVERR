
import React, { useContext } from "react";
import InputCustom from "../../Input/InputCustom";
import { DatePicker, notification } from "antd";
import { useFormik } from "formik";
import * as yup from "yup";
import { noticeValuation } from "../../common/noticeValuation";
import { authService } from "../../service/auth.service";
import { NotificationContext } from "../../App";
import { useNavigate } from "react-router-dom";
const FormRegister = () => {
  const { handleNotification } = useContext(NotificationContext);
  const navigaite = useNavigate();
  const {
    handleChange,
    handleSubmit,
    values,
    setFieldValue,
    resetForm,
    setValues,
    handleReset,
    errors,
    touched, //true,false
    handleBlur,
    isValid,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: "",
    },
    onSubmit: (values) => {
      console.log(values);

      authService
        .signUp({
          ...values,
          gender: (values.gender = values.gender == "Nam" ? true : false),
        })
        .then((res) => {
          //thực hiện thông báo cho người dùng

          console.log(res);
          handleNotification(
            "chúc mừng tạo tài khoản thành công bạn sẽ chuyển về đăng trang nhập",
            "success"
          );
          setTimeout(() => {
            navigaite("/dang-nhap");
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
          handleNotification(err.response.data.content, "error");
        });
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email(noticeValuation.email)
        .required(noticeValuation.empty),
      name: yup
        .string()
        .required(noticeValuation.empty)
        .matches(/^[A-Za-zÀ-ỹà-ỹ]+$/, "Vui lòng nhập tên không phải chử số"),
      password: yup
        .string()
        .required(noticeValuation.empty)
        .matches(
          /^(?=.*[A-Z])(?=.*\d).+$/,
          "Vui lòng nhập ít nhất một chử cái viết hoa và số"
        ),
      phone: yup
        .string()
        .required(noticeValuation.empty)
        .matches(
          /^(\+84|0)(3|5|7|8|9)(\d{2})(\d{3})(\d{3})$/,
          "Vui lòng nhập đúng SDT"
        ),
      birthday: yup.string().required(noticeValuation.empty),
      gender: yup.string().required(noticeValuation.empty),
    }),
  });
  return (
    <div className=" flex items-center justify-center flex-col h-full ">
      <h1>Form đăng ký</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap">
          <InputCustom
            contentLabel={"Họ Tên"}
            name={"name"}
            placeHolder={"Vui lòng nhập tên"}
            classWrapper="w-1/2 p-3 "
            onChange={handleChange}
            valueHey
            Cortana={values.name}
            onBlur={handleBlur}
            errors={errors.name}
            touched={touched.name}
          />
          <InputCustom
            contentLabel={"Email"}
            name={"email"}
            placeHolder={"Vui lòng nhập email"}
            classWrapper="w-1/2 p-3"
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
            errors={errors.email}
            touched={touched.email}
          />
          <InputCustom
            contentLabel={"Mật khẩu"}
            name={"password"}
            placeHolder={"Vui lòng nhập Mật khẩu"}
            classWrapper="w-full p-3"
            type="password"
            onChange={handleChange}
            value={values.password}
            onBlur={handleBlur}
            errors={errors.password}
            touched={touched.password}
          />
          <InputCustom
            contentLabel={"Số Điện thoại"}
            name={"phone"}
            placeHolder={"Vui lòng nhập Số điện thoại"}
            classWrapper="w-1/3 p-3"
            onChange={handleChange}
            value={values.phone}
            onBlur={handleBlur}
            errors={errors.phone}
            touched={touched.phone}
          />
          <div className="w-1/3 p-3">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Ngày Sinh
            </label>
            <DatePicker
              className="w-full"
              format="DD-MM-YYYY"
              onChange={(datejs, datestring) => {
                setFieldValue("birthday", datestring);
              }}
            />
            {errors.birthday && touched.birthday ? (
              <p className="text-red-500"> {errors.birthday}</p>
            ) : null}
          </div>
          <div className="w-1/3 p-3">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Giới tính
            </label>
            <select
              name="gender"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={handleChange}
              value={values.gender}
            >
              <option value="">Vui lòng chọn giới tính</option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
            </select>
            {errors.gender && touched.gender ? (
              <p className="text-red-500"> {errors.gender}</p>
            ) : null}
          </div>
          <div className="w-full">
            <button
              className="py-3 px-6 bg-black text-white rounded-lg w-full"
              type="submit"
              // onClick={(e) => {
              //   e.preventDefault();
              //   handleSubmit();
              // }}
            >
              Đăng ký
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormRegister;
