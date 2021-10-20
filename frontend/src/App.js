import logo from "./logo.svg";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/shared/header/Header";
import Register from "./pages/Register/Register";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <Register />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
