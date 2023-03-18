import "./App.css";
import AboutMe from "./pages/aboutMe/AboutMe";
import FormComponent from "./pages/form/FormComponent";

import HomePage from "./pages/homePage/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";
import Portfolio from "./pages/portfolio/Portfolio";
import Route from "./router/Route";

function App() {
  return (
    <div className="App">
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
      <Route path="/login">
        <LoginPage />
      </Route>
    </div>
  );
}

export default App;
