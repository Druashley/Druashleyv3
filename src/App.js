import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
