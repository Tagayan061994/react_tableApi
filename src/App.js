import React from "react";
import "./App.css";
import Interface from "./components/interface.jsx";
import Userposts from "./components/Usersposts.jsx";
import Usercomments from "./components/Usercomments.jsx";
//Routing
import {
  Route,
  Switch,
  withRouter
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={props => <Interface history={props.history} />}
        ></Route>
        <Route
          exact
          path="/Userposts/:userId"
          render={props => <Userposts {...props} />}
        ></Route>
        <Route
          path="/Userposts/:id/:postId"
          render={props => <Usercomments {...props} />}
        ></Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
