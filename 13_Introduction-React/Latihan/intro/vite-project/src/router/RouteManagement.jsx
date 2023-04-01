import React, { Suspense, useEffect } from "react";
import LoadingComponent from "../components/loadingComponent/LoadingComponent";
import { Route, Routes, useNavigate } from "react-router-dom";
import LoginPage from "../pages/loginPage/LoginPage";
import FormComponent from "../pages/form/FormComponent";
import LayoutComponent from "../components/layouts/LayoutComponent";
import HomePage from "../pages/homePage/HomePage";
import Portfolio from "../pages/portfolio/Portfolio";
import AboutMe from "../pages/aboutMe/AboutMe";
import FormComponentExp from "../pages/formExample/FormComponentExp";

const RouteManagement = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);

  return (
    <Suspense fallback={<LoadingComponent />}>
      {!token ? (
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      ) : (
        <LayoutComponent>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/form" element={<FormComponent />} />
            <Route path="/form-exp" element={<FormComponentExp />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about-me" element={<AboutMe />} />
          </Routes>
        </LayoutComponent>
      )}
    </Suspense>
  );
};

export default RouteManagement;
