import React from 'react'
import { Outlet } from "react-router-dom";
import Tableau2Bord from '../controller/tableau2Bord'
import Home from '../controller/home'
import ErrorPage from '../controller/errorPage'
import SideBar from '../view/sideBar'
import Nav from '../view/nav'


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
              path: "/:userId",
              element: <Tableau2Bord />,  //on selection id par api
          },
          {
              path: "*",
              element: <ErrorPage />,
          },
      ],
  },
];

function Layout () {  // par défaut, c'est header, sidebar et outlet qui change
  return (
<>
  <Nav />
  <SideBar />
  <section className="elementsToDisplay">
      <Outlet />
  </section>
  </>
  );
}

