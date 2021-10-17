import "./App.css";

import Nav from "./Components/Nav";
import Home from "./Components/Home";

import { Route, Switch } from "react-router";
function App() {
  return (
    <div className="App">
      <Nav />

      <Switch>
        <Route path="/">
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
