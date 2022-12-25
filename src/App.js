import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import "./App.css";

import HomeScreen from "./components/home/HomeScreen";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";

function App() {
  const user = useSelector(selectUser);
  // const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      console.log("user auth :", userAuth);
      if (userAuth) {
        // Logged In
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // Logged out
        dispatch(logout());
        // () => navigate("/", { replace: true });
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {!user ? (
            <Route path="/login" element={<Login />}></Route>
          ) : (
            <>
              {/* <Route path="/about" element={}></Route> */}
              <Route exact path="/" element={<HomeScreen />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
