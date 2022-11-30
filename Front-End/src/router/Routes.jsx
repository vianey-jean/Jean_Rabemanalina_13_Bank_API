import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../componenets/Header";
import Home from "../pages/Home";
import Profile from "../pages/user";
import Error from "../pages/Error";
import PrivateRoute from "../componenets/PrivateRoute";
import SingIn from "../pages/SingIn";
import Footer from "../componenets/Footer";


/**
 *  Dom injector, creation of router and privateRouter
 * @returns  routes
 */
function RoutesPath() {
  return (
    <BrowserRouter>
      <Header />
      <section className="elementsToDisplay">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SingIn />} />
          <Route path="/user" element={<PrivateRoute />}>
            <Route path="/user" element={<Profile />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </section>
      <Footer />
    </BrowserRouter>
  );
}

export default RoutesPath;
