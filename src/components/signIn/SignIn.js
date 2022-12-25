import React, { useRef } from "react";
import { auth } from "../../firebase";
import "./SignIn.css";

function SignIn() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log("auth user :", authUser);
      })
      .catch((error) => {
        alert(error?.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log("Log in user : ", authUser);
      })
      .catch((error) => {
        alert(error?.message);
      });
  };

  return (
    <div className="signin">
      <form>
        <h1 className="signin__title">Sign In</h1>
        <input
          ref={emailRef}
          className="signin__input"
          type="email"
          placeholder="Email"
        />
        <input
          ref={passwordRef}
          className="signin__input"
          type="password"
          placeholder="Password"
        />
        <button onClick={signIn} className="signin__btn" type="submit">
          Sign In
        </button>
        <h4 className="signin__now">
          <span className="signin__gray">New to Netflix? </span>
          <span className="signin__link" onClick={register}>
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignIn;
