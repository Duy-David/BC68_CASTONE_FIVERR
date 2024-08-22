import React, { useContext } from "react";
import SigninAnimation from "../../assets/Animation/animation-register/Animation-Signin.json";
import { useLottie } from "lottie-react";
import InputCustom from "../../Input/InputCustom";
import { authService } from "../../service/auth.service";
import { useFormik } from "formik";
import * as yup from "yup";
import { noticeValuation } from "../../common/noticeValuation";
import { Link, useNavigate } from "react-router-dom";
import { setLocalStorage } from "../../util/utils";
import { useDispatch } from "react-redux";
import { setValueUser } from "../../redux/authSlice";
import { NotificationContext } from "../../App";
const LoginPage = () => {
  const navigate = useNavigate();
  const options = {
    animationData: SigninAnimation,
    loop: true,
  };
  const { View } = useLottie(options);
  const dispatch = useDispatch();
  const { handleNotification } = useContext(NotificationContext);
  const { handleChange, handleSubmit, values, errors, touched, handleBlur } =
    // console.log(values);
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: async (values) => {
        console.log(values);
        try {
          const result = await authService.signIn(values);
          console.log(result);
          // b1 :lưu trử dữ lieu xuống local
          setLocalStorage("user", result.data.content);
          //b2: chuyển hướng người dùng
          dispatch(setValueUser(result.data.content));
          handleNotification(
            "Đăng nhập thành công, bạn sẽ được chuyển đến trang chủ",
            "success"
          );
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } catch (error) {
          console.log(error);
          handleNotification(error.response.data.content, "error");
        }
      },
      // validationSchema: yup.object({
      //   email: yup
      //     .string()
      //     .email(noticeValuation.email)
      //     .required(noticeValuation.empty),
      //   password: yup
      //     .string()
      //     .required(noticeValuation.empty)
      //     .matches(
      //       /^(?=.*[A-Z])(?=.*\d).+$/,
      //       "Vui lòng nhập ít nhất một chử cái viết hoa và số"
      //     ),
      // }),
    });

  return (
    <div className="container">
      <div className="loginPage_content flex items-center h-screen">
        <div className="loginPage_img w-1/2">{View}</div>
        <div className="loginPage_form w-1/2 px-5">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <h1 className="font-medium text-4xl text-center">Đăng nhập</h1>
            <InputCustom
              contentLabel={"Email"}
              placeHolder={"Vui lòng nhập email"}
              name="email"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
              errors={errors.email}
              touched={touched.email}
            />

            <InputCustom
              contentLabel={"Password"}
              placeHolder={"Vui lòng nhập Mật khẩu"}
              name="password"
              type="password"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
              errors={errors.password}
              touched={touched.password}
            />
            <div>
              <button
                type="submit"
                className="inline-block w-full py-3 px-5 bg-black text-white rounded-lg"
              >
                Đăng nhập
              </button>
            </div>
          </form>

          <Link
            className="text-blue-800 mt-5 inline-block hover:underline"
            to={"/dang-ky"}
          >
            {" "}
            Chưa có tài khoản phải đăng ký thì nhấn vào để đăng ký
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
