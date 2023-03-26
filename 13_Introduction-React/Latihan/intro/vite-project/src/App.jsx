import "./App.css";
import LayoutComponent from "./components/layouts/LayoutComponent";
// import LayoutComponent from "./components/layouts/LayoutComponent";
import AboutMe from "./pages/aboutMe/AboutMe";
import FormComponent from "./pages/form/FormComponent";
import FormComponentExp from "./pages/formExample/FormComponentExp";

import HomePage from "./pages/homePage/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";
import Portfolio from "./pages/portfolio/Portfolio";
import Route from "./router/Route";

function App() {
  return (
    <LayoutComponent>
      <Route path="/">
        <HomePage />
      </Route>
      <Route path="/about-me">
        <AboutMe />
      </Route>
      <Route path="/portfolio">
        <Portfolio />
      </Route>
      <Route path="/form">
        <FormComponent />
      </Route>
      <Route path="/form-exp">
        <FormComponentExp />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
    </LayoutComponent>
  );
}

export default App;
