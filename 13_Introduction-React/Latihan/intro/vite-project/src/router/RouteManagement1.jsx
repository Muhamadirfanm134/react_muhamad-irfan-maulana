import React, { Suspense, lazy, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import LayoutComponent from "../components/layouts/LayoutComponent";
import LoadingComponent from "../components/loadingComponent/LoadingComponent";
import { useState } from "react";

// Lazy Pages
const LoginPage = lazy(() => import("../pages/loginPage/LoginPage"));
const HomePage = lazy(() => import("../pages/homePage/HomePage"));
const FormComponentExp = lazy(() =>
  import("../pages/formExample/FormComponentExp")
);

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
          <Route index element={<LoginPage />} />
        </Routes>
      ) : (
        <LayoutComponent>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/form-exp" element={<FormComponentExp />} />
          </Routes>
        </LayoutComponent>
      )}
    </Suspense>
  );
};

export default RouteManagement;
