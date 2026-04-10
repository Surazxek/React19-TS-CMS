import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "../pages/home/HomePage";
import ForgetPasswordPage from "../pages/auth/ForgetPassword";
import NotFound from "../pages/error/NotFound";
import UserLayout from "../pages/layouts/UserLayout";
import AdminLayout from "../pages/layouts/AdminLayout";
import UserCreate from "../pages/user/UserCreate";



const routerConf = createBrowserRouter([
{ path: "/", element: <HomePage /> },
  { path: "/forget-password", Component: ForgetPasswordPage },
  // { path: "/", element: < ForgetPasswordPage /> },

 {path: "/admin", element: <AdminLayout />, children: [
  {path: "user/create", element: <UserCreate />}
 ]},
  //path: /admin/user/create
  //develop a form to accept the following 
  //firstName, lastaName, userName, email, gender, password, birthDate,
  // university, company : {department, name , title, } , address, role: (admin, user, moderator)
  
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
