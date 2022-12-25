import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav() {
  console.log(useState);
  const [show, handleShow] = useState(false);

  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show ? "nav__black" : ""}`}>
      <div className="nav__content">
        <img
          onClick={() => navigate("/")}
          className="nav__logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa1OrnCkT8pKjWeQVbytermawWezbGeq_fkTIOAX55vgcfRLERkaiINgbo-agEa2HEcIw&usqp=CAU"
          alt=""
        />
        <img
          onClick={() => navigate("/profile")}
          className="nav__avatar"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
