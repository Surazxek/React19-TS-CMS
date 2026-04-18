import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "../pages/home/HomePage";
import ForgetPasswordPage from "../pages/auth/ForgetPassword";
import NotFound from "../pages/error/NotFound";
import UserLayout from "../pages/layouts/UserLayout";
import AdminLayout from "../pages/layouts/AdminLayout";
import UserCreate from "../pages/user/UserCreate";
import UserList from "../pages/user/UserList";
import ResetPassword from "../pages/auth/ResetPassword";

const routerConf = createBrowserRouter([
  { path: "/", element: <HomePage /> },

  { path: "/forget-password", element: <ForgetPasswordPage /> },

  { path: "/reset-password", element: <ResetPassword /> },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "users", element: <UserList /> },
      { path: "user/create", element: <UserCreate /> },
    ],
  },

  {
    path: "/user",
    element: <UserLayout />,
    children: [
      { index: true, element: <>Dashboard (KPI)</> },
      { path: "*", element: <NotFound /> },
    ],
  },

  { path: "*", element: <NotFound /> },
]);

export default function RouterConfig() {
  return <RouterProvider router={routerConf} />;
}