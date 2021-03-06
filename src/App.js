import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Components/Authentication/Login";
import Device from "./Components/Device/Device";
import PrivateRoute from "./Components/Authentication/PrivateRoute";
import ModalPopUp from "./Components/ModalPopUp/ModalPopUp";

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
          <PrivateRoute path="/products">
            <Device />
          </PrivateRoute>
          <Route exact path="/modalPopUp">
            <ModalPopUp />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
