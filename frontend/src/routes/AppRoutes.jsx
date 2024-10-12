import React, { lazy } from "react";

const Search = lazy(() => import("../pages/Search"));
const Login = lazy(() => import("../pages/auth/Login"));
const SignUp = lazy(() => import("../pages/auth/SignUp"));
const ForgotPassword = lazy(() => import("../pages/auth/ForgotPassword"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const ContactUs = lazy(() => import("../pages/ContactUs"));

const AppRoutes = [
  {
    path: "/search",
    element: Search,
  },
  {
    path: "/login",
    element: Login,
  },
  {
    path: "/sign-up",
    element: SignUp,
  },
  {
    path: "/contact",
    element: ContactUs,
  },
  {
    path: "/forgot-password",
    element: ForgotPassword,
  },
  {
    path: "*",
    element: PageNotFound,
  },
];

export default AppRoutes;
