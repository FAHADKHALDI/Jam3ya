import "./App.css";

import Nav from "./Components/NavBar";
import Home from "./Components/Home";

import { Route, Switch } from "react-router";
function App() {
  return (
    <div>
      <Nav />

      <Switch>
        <Route path="/Jam3yat">
          <jam3yaList />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
