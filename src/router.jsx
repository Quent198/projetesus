import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Homepage from "./pages/homepage/Homepage";
import ErrorPage from "./pages/ErrorPage";
import Login from "./components/auth/Login";
import CookiePolicy from "./components/CookiePolicy";
import LegalNotice from "./components/LegalNotice"; 
import Register from "./components/auth/Register";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import HostingPage from "./pages/HostingPage";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path:"/register",
        element:<Register/>,
      },
      {
        path: "/cookie-policy",  
        element: <CookiePolicy />,
      },
      {
        path:"/legalnotice",
        element:<LegalNotice />
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/privacypolicy",
        element:<PrivacyPolicy/>
      },
      {
        path:"/hostingpage",
        element:<HostingPage/>
      },
      {
        path:"/forgotpassword",
        element:<ForgotPassword/>
      },
      {
        path:"/resetpassword",
        element:<ResetPassword/>
      }
    ],
  },
]);
