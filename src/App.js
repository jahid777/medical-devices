import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Components/Authentication/Login";
import Home from "./Components/Home/Home";
import PrivateRoute from "./Components/Authentication/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/home">
            <Home />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
