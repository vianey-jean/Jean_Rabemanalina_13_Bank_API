import React from 'react'
import { Outlet } from "react-router-dom";
import Nav from '../components/nav/nav'
import Home from '../pages/home/home'
import Footer from '../components/footer/footer'
import LogIn from '../pages/logIn/logIn'
import LogOut from "../pages/Logout/Logout";
import Erreur404 from "../pages/404/404";
import User from '../pages/user/user'

export const routes = [
  {
      path: "/",
      element: <Layout />,  //par défaut c'est layout
      children: [
          {
              index: true, //dans le main, c'est par défaut c'est la page home
              element: <Home />,
          },
          {
            path: "/logIn",
            element: <LogIn />,
        },
        {
          path: "/logOut",
          element: <LogOut />,
      },
        {
          path: "/user",
          element: <User />,
      },
      {
        path: "*",
        element: <Erreur404 />,
    },
      
      ],
  },
];

function Layout () {  // par défaut, c'est header, sidebar et outlet qui change
  return (
<>
  <Nav/>
  <section className="elementsToDisplay">
      <Outlet />
  </section>
  <Footer />
  </>
  );
}

