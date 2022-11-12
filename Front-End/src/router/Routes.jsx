import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../componenets/Header";
import Home from "../pages/Home";
import Profile from "../pages/profilePage/Profile";
import Error from "../pages/Error";
import PrivateRoute from "../componenets/PrivateRoute";
import SignIn from "../pages/loginPage/SingIn";
import Footer from "../componenets/Footer";

function RoutesPath() {
  return (
    <BrowserRouter>
      <Header />
      <section className="elementsToDisplay">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loginPage/signIn" element={<SignIn />} />
          <Route path="/profilePage/Profile" element={<PrivateRoute />}>
            <Route path="/profilePage/Profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </section>
      <Footer />
    </BrowserRouter>
  );
}

export default RoutesPath;
