import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../components/Header'
import Home from '../pages/Home'
import SignIn from '../pages/loginPage/SingIn'
import Footer from '../components/Footer'
import Error from '../pages/Error'


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
            path: "/signIn",
            element: <SignIn />,
        },
          {
              path: "*",
              element: <Error />,
          },
      ],
  },
];

function Layout () {  // par défaut, c'est header, sidebar et outlet qui change
  return (
<>
  <Header />
  <section className="elementsToDisplay">
      <Outlet />
  </section>
  <Footer />
  </>
  );
}

