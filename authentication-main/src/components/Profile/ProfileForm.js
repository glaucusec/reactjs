import classes from "./ProfileForm.module.css";
import React, { useRef, useContext } from "react";

import { AuthContext } from "../../context/ContextProvider";

const API_KEY = "AIzaSyC0MQ-1rPO3mkje4H03sOhbBSO6GJQX0Kw";

const ProfileForm = () => {
  const authCtx = useContext(AuthContext);
  const enteredPassword = useRef();

  const changePasswordHandler = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`,
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredPassword.current.value,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let responseData = await response.json();
    if (response.ok) {
      alert("Password Changed");
    } else {
      alert(responseData.error.message);
    }
  };
  return (
    <form onSubmit={changePasswordHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={enteredPassword} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
