import React, { Suspense } from "react";
import { useParams, useRoutes } from "react-router-dom";
import Usertemplate from "../templates/Usertemplate/Usertemplate";
import { pathDefault } from "../common/path";
import Register from "../pages/Register/Register";
import LoginPage from "../pages/Login/LoginPage";
import ListJobPage from "../pages/ListJobPage/ListJobPage";
import AdminLogin from "../pages/AdminLogin/AdminLogin";
import Admintemplate from "../templates/Admintemplate/Admintemplate";
// import ManagerUser from "../pages/ManagerUser/ManagerUser";
import CreateUser from "../pages/CreateUser/CreateUser";
import { Skeleton } from "antd";
import DetailJobPage from "../pages/DetailJobPage/DetailJobPage";
import HomePage from "../pages/Home/HomePage";
const ManagerUser = React.lazy(() =>
  import("../pages/ManagerUser/ManagerUser")
);
const useRoutesCustom = () => {
  const { jobId } = useParams();

  const routes = useRoutes([
    {
      path: pathDefault.homePage,
      element: <Usertemplate />,
      children: [
        {
          path: pathDefault.listJob,
          element: <ListJobPage />,
        },
        {
          path: `${pathDefault.detailListJob}`,
          element: <DetailJobPage />,
        },
        {
          path: "",
          element: <HomePage />,
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
      children: [
        // {
        //   path: "/manerger-user",
        //   index: true,
        //   element:  <ManagerUser />,
        // },
        {
          path: "manager-user",
          // index: true,
          element: (
            <Suspense fallback={<Skeleton />}>
              {/*  <Suspense fallback={<div>...Loading</div>}> */}
              <ManagerUser />
            </Suspense>
          ),
        },
        {
          path: "create-user",
          element: <CreateUser />,
        },
      ],
    },
    {
      path: "/admin-login",
      element: <AdminLogin />,
    },
  ]);

  return routes;
};

export default useRoutesCustom;
