import React from "react";
import { useRoutes } from "react-router-dom";
import Usertemplate from "../templates/Usertemplate/Usertemplate";
import { pathDefault } from "../common/path";
import Register from "../pages/Register/Register";
import LoginPage from "../pages/Login/LoginPage";
import ListJobPage from "../pages/ListJobPage/ListJobPage";
import AdminLogin from "../pages/AdminLogin/AdminLogin";
import Admintemplate from "../templates/Admintemplate/Admintemplate";
import ManagerUser from "../pages/ManagerUser/ManagerUser";

const useRoutesCustom = () => {
  const routes = useRoutes([
    {
      path: pathDefault.homePage,
      element: <Usertemplate />,
      children: [
        {
          path: pathDefault.listJob,
          element: <ListJobPage />,
        },
      ],
    },
    {
      path: pathDefault.register,
      element: <Register />,
    },
    {
      path: pathDefault.login,
      element: <LoginPage />,
    },
    {
      path: pathDefault.admin,
      element: <Admintemplate />,
    },
    {
      path: "/admin-login",
      element: <AdminLogin />,
      children: {
        // path: "/manerger-user",
        index: true,
        element: <ManagerUser />,
      },
      children: {
        path: "/manager-user",
        // index: true,
        element: <ManagerUser />,
      },
    },
  ]);

  return routes;
};

export default useRoutesCustom;
