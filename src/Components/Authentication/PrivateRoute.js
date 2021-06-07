import React, { useState } from "react";
import { Redirect, Route } from "react-router";
import { UserContext } from "../../App";
import { useContext } from "react";

const PrivateRoute = ({ rest, children }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email || sessionStorage.getItem("token") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;

// import React from "react";
// import { Redirect, Route } from "react-router-dom";
// import { useContext } from "react";
// import { UserContext } from "../../App";

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         loggedInUser.email ? <Component {...props} /> : <Redirect to="login" />;
//       }}
//     ></Route>
//   );
// };

// export default PrivateRoute;
