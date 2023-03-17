import "./App.css";
import AboutMe from "./pages/aboutMe/AboutMe";
import HomePage from "./pages/homePage/HomePage";
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
    </div>
  );
}

export default App;
