import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import React, { useContext, useState } from "react";
import firebaseConfig from "./firebase.config";
import "../Authentication/Login.css";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/products" } };
  const [user, setUser] = useState({
    email: "",
    password: "",
    error: "",
    success: "",
  });
  const handleSubmit = (event) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((userCredential) => {
        // var user = userCredential.user;
        // Signed in
        const userInfo = { ...user };
        userInfo.error = "";
        userInfo.errorCode = "";
        userInfo.success = true;
        setUser(userInfo);
        setLoggedInUser(userInfo);
        // alert("Your Logged In Successful");
        history.push("/home");
        setUserToken();
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // console.log(errorCode, errorMessage);
        const userInfo = { ...user };
        userInfo.error = error.message;
        userInfo.errorCode = errorCode.message;
        userInfo.success = false;
        setUser(userInfo);
      });
    event.preventDefault();
  };

  const handleBlur = (e) => {
    const userInfo = { ...user };
    userInfo[e.target.name] = e.target.value;
    setUser(userInfo);
  };

  const setUserToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
      })
      .catch(function (error) {
        // Handle error
      });
  };
  console.log(loggedInUser, "hey im here");
  return (
    <div className="login-page">
      <div className="form">
        <div className="login">
          <div className="login-header">
            <h3 className="login-text">LOGIN</h3>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <input
            name="email"
            onBlur={handleBlur}
            type="email"
            placeholder="Email"
            required
          />
          <input
            name="password"
            onBlur={handleBlur}
            type="password"
            placeholder="Password"
            required
          />
          <input className="button-login" type="submit" value="login" />
          <p className="message">
            Not registered? <a href="#">Create an account</a>
          </p>
        </form>
        <p style={{ color: "red" }}>
          {" "}
          <strong>{user.error}</strong>{" "}
        </p>
        {/* {user.success && <p style={{ color: "green" }}>Logged In Successful</p>} */}
      </div>
    </div>
  );
};

export default Login;
