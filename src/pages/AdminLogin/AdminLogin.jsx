import React, { useContext } from "react";
import InputCustom from "../../Input/InputCustom";
import { useFormik } from "formik";
// import Password from "antd/es/input/Password";
import AdminloginAnimation from "../../assets/Animation/animation-register/Animation-admin-login.json"
import { authService } from "../../service/auth.service";
import { getLocalStorage, setLocalStorage } from "../../util/utils";
import { NotificationContext } from "../../App";
import { useDispatch } from "react-redux";
import { setValueUser } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { pathDefault } from "../../common/path";
import { useLottie } from "lottie-react";
const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const options = {
    animationData: AdminloginAnimation,
    loop: true,
  };
  const { View } = useLottie(options);

  const { handleNotification } = useContext(NotificationContext);

  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      authService
        .signIn(values)
        .then((res) => {
          console.log(res);
          //Thực hiện xem ngươc2 có phải user không
          if (res.data.content.user.role == "USER") {
            handleNotification("Bạn khkông được phép truy cập", "error");
            let viPham = getLocalStorage("viPham");
            if (!viPham) {
              setLocalStorage("viPham", 1);
            } else {
              viPham++;
              viPham == 3
                ? (window.location.href = "https://www.google.com/")
                : setLocalStorage("viPham", viPham);
            }
          } else {
            setLocalStorage("user", res.data.content);
            dispatch(setValueUser(res.data.content));
            localStorage.removeItem("viPham");
            navigate(pathDefault.admin);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <>
      <div className="container">
        <div className="admin_login flex items-center h-screen">
          <div className="admin_login_animetion w-1/2">
            {View}          
          </div>
          <div className="admin_login_form w-1/2 flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-4">
              <h1 className="text-3xl font-bold text-center">
                {" "}
                Trang đăng nhập cho Admin
              </h1>
              <InputCustom
                name={"email"}
                contentLabel={"Email"}
                onChange={handleChange}
                value={values.email}
              />
              <InputCustom
                name="password"
                contentLabel={"Password"}
                onChange={handleChange}
                value={values.password}
                type="password"
              />
              <div className="">
                <button
                  type="submit"
                  className="py-5 px-2 bg-black text-white w-full rounded-lg  inline-block"
                >
                  Đăng nhập
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
