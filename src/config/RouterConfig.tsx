import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "../pages/auth/home/HomePage";
import ForgetPasswordPage from "../pages/auth/ForgetPassword";
import NotFound from "../pages/error/NotFound";
import UserLayout from "../pages/layouts/UserLayout";



const routerConf = createBrowserRouter([
{ path: "/", element: <HomePage /> },
  { path: "/forget-password", Component: ForgetPasswordPage },
  // { path: "/", element: < ForgetPasswordPage /> },
  {path: "/user", element: <UserLayout />, children: [
    {index: true, element: <> Dashboard (KPI)</> },
    {path: "*", element: <NotFound  />},
  ]},







  {path: "*", element: <NotFound  />}
  // {path: "*", element: <NotFound url="/forget-password" linkText="Go back to Login page" />}
]);

export default function RouterConfig() {
  //Declearative or Data

  return <RouterProvider router={routerConf} />;
}
