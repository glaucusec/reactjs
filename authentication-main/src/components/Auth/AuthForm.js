import { useState, useRef, useContext } from "react";

import classes from "./AuthForm.module.css";

import { AuthContext } from "../../context/ContextProvider";

const API_KEY = 'AIzaSyC0MQ-1rPO3mkje4H03sOhbBSO6GJQX0Kw'


const AuthForm = () => {
  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [status, setStatus] = useState(null);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (isLogin) {
      setStatus("Sending Request");
      try {
        let response = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
          {
            method: "POST",
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
            }),
          }
        );

        let responseData = await response.json();
        if (response.ok) {
          authCtx.login(responseData.idToken);
          setStatus("Login Successful");
        } else {
          setStatus("Something Went Wrong");
          alert(responseData.error.message);
        }
      } catch (e) {}
    } else {
      setStatus("Sending Request...");
      try {
        let response = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
          {
            method: "POST",
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
              returnSecureToken: true,
            }),
          }
        );
        let responseData = await response.json();
        if (!response.ok) {
          console.log(responseData);
          setStatus("Something Went Wrong");
          alert(responseData.error.message);
        } else {
          setStatus("Signup Successfull.");
        }
      } catch (e) {
        setStatus("Something Went Wrong");
      }
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={formSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.control}>
          <label type="status">{status}</label>
        </div>
        <div className={classes.actions}>
          <button type="submit" className="button">
            Submit
          </button>
        </div>
        <div className={classes.actions}>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
