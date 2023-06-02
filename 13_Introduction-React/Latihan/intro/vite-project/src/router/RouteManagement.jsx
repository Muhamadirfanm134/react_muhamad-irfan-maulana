import React, { Suspense, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import LayoutComponent from "../components/layouts/LayoutComponent";
import LoadingComponent from "../components/loadingComponent/LoadingComponent";
import AboutMe from "../pages/aboutMe/AboutMe";
import FormCRUD from "../pages/crud/FormCRUD";
import FormCRUDAPI from "../pages/crud/FormCRUD-API";
import FormCRUD_graph from "../pages/crud/exp/FormCRUD-graph";
import FormComponent from "../pages/form/FormComponent";
import FormComponentExp from "../pages/formExample/FormComponentExp";
import HomePage from "../pages/homePage/HomePage";
import LoginPage from "../pages/loginPage/LoginPage";
import Portfolio from "../pages/portfolio/Portfolio";
import ProductPage from "../pages/productPage/ProductPage";
import Contentful from "../pages/contentful/Contentful";
import ProductDetail from "../pages/productPage/components/ProductDetail";

const RouteManagement = () => {
  const token = localStorage.getItem("access_token");
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
            <Route path="/" element={<HomePage />} />
            <Route path="/form" element={<FormComponent />} />
            <Route path="/form-exp" element={<FormComponentExp />} />
            <Route path="/form-crud" element={<FormCRUD />} />
            <Route path="/form-crud-api" element={<FormCRUDAPI />} />
            <Route path="/form-crud-exp" element={<FormCRUD_graph />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/about-me/:id" element={<AboutMe />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/product/:uuid" element={<ProductDetail />} />
            <Route path="/content" element={<Contentful />} />
          </Routes>
        </LayoutComponent>
      )}
    </Suspense>
  );
};

export default RouteManagement;
