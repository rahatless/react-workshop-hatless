import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import State from "./Components/useStateHook/State";
import Effect from "./Components/useEffectHook/Effect";
import Reducer from "./Components/useReducerHook/Reducer";
import LifeCycle from "./Components/lifecycle/LifeCycle.jsx";
import Memo from "./Components/useMemoHook/Memo";
import Callback from "./Components/useCallback/Callback";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/useState">
            <State />
          </Route>
          <Route path="/useEffect">
            <Effect />
          </Route>
          <Route path="/useReducer">
            <Reducer />
          </Route>
          <Route path="/lifecycle">
            <LifeCycle />
          </Route>
          <Route path="/useMemo">
            <Memo />
          </Route>
          <Route path="/useCallback">
            <Callback />
          </Route>
          <Route path="/">
            <Redirect to="/useState" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
