import "./App.css";
import jam3yaList from "./Components/jam3yaList";
import Nav from "./Components/NavBar";
import Home from "./Components/Home";
import { Route, Switch } from "react-router";
function App() {
  return (
    <div>
      <Nav />

      <Switch>
        <Route exact path="/jam3ya">
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
