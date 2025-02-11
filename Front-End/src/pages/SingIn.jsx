import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Alert } from "react-bootstrap";
import { userLogin } from "../services/userLogin";
import { useSelector, useDispatch } from "react-redux";
import {
  logingPending,
  logingSuccess,
  logingError,
  logingRemember,
} from "../features/token/loginSlice";

/**
 * Component - SingIn
 * @returns {React.ReactElement} JSX.Element - SingIn component
 */

function SingIn() {
  const { isLoading, error, isRemember } = useSelector((state) => state.login);// dans le state golabe de redux, je veux seulement le state login
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [credientials, setCredientials] = useState({
    email: "",
    password: "",
  }); // pour creer le loading pendant le chargement de verification.

  function handelChange({ currentTarget }) {
    const { value, name } = currentTarget;
    setCredientials({
      ...credientials,
      [name]: value,
    }); //récupère les valeur dans le formulaire de connexion.
  }

  async function handelSubmit(e) { //pour la validation
    e.preventDefault();

    dispatch(logingPending());
    try {
      const isAuth = await userLogin(credientials); // attendre dans la API si la valeur entre est correcte.

      if (isRemember) {
        localStorage.setItem("token", isAuth.body.token);
      } else {
        localStorage.removeItem("token");
      }

      dispatch(logingSuccess());//si le login est en succes
      navigate("/user"); // alors je suis dirriger vers user
    } catch (error) { //si on erreur
      console.log(error);
      dispatch(logingError(error.response.data.message)); //montrer le message erreur
    }
  }

  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <form onSubmit={handelSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="email"
                onChange={handelChange}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handelChange}
              />
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                name="remember-me"
                defaultChecked={isRemember}
                onChange={() => dispatch(logingRemember(!isRemember))}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <Button type="submit" variant="success" className="sign-in-button">
              Sign In
            </Button>
            {isLoading && (
              <div className="spinner-border text-success mt-1" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
          </form>
        </section>
      </main>
    </>
  );
}

export default SingIn;
