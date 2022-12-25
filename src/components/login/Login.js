import React, { useState } from "react";
import SignIn from "../signIn/SignIn";
import "./Login.css";

function Login() {
  const [singIn, setSignin] = useState(false);
  return (
    <div className="login">
      <div className="login__background">
        <img
          className="login__logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa1OrnCkT8pKjWeQVbytermawWezbGeq_fkTIOAX55vgcfRLERkaiINgbo-agEa2HEcIw&usqp=CAU"
          alt=""
        />
      </div>
      <button onClick={() => setSignin(true)} className="login__button">
        Sing In
      </button>
      <div className="login__gradient"></div>
      <div className="login__body">
        {singIn ? (
          <SignIn />
        ) : (
          <>
            <h1>Unlimited films, TV Programmmes and more</h1>
            <h2>Watch anywhere, Cancel at any time</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="login__input">
              <form>
                <input
                  className="login__email"
                  type="email"
                  placeholder="Email address"
                />
                <button
                  onClick={() => setSignin(true)}
                  className="login__getStarted"
                  type="button"
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
