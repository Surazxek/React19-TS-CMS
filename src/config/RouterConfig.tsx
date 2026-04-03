import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "../pages/auth/home/HomePage";
import ForgetPasswordPage from "../pages/auth/ForgetPassword";


const routerConf = createBrowserRouter([
{ path: "/", element: <HomePage /> },
  { path: "/forget-password", Component: ForgetPasswordPage },
  // { path: "/", element: < ForgetPasswordPage /> },
  
]);

export default function RouterConfig() {
  //Declearative or Data

  return <RouterProvider router={routerConf} />;
}
