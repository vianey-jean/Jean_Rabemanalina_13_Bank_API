import React from "react";
import { userDatas } from "../services/userDatas";
import { useDispatch, useSelector } from "react-redux";
import {
  profileFirstName,
  profileLastName,
  profileError,
} from "../features/token/profileSlice";
import UserHeader from "../componenets/userHeader";
import ProfileAccounts from "../componenets/UserAccounts";
import axios from "axios";

/**
 * Component - User ptofile
 * @returns {React.ReactElement} JSX.Element - User component
 */


const token = localStorage.getItem("token");
if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

function Profile() {
  const dispatch = useDispatch();
  const { isRemember } = useSelector((state) => state.login);

  userDatas() //on récupère les nom et prénom du profil de connecter sur API et mettre en place
    .then((data) => {
      dispatch(profileFirstName(data.body.firstName));
      dispatch(profileLastName(data.body.lastName));

      if (isRemember) {
        localStorage.setItem("firstName", data.body.firstName);
        localStorage.setItem("lastName", data.body.lastName);
      } else {
        localStorage.removeItem("firstName");
        localStorage.removeItem("lastName");
      }
    })
    .catch((error) => dispatch(profileError(error.response.data.message)));

  return (
    <main className="main bg-dark">
      <UserHeader /> {/**formulaire de mise a jour du profil */}
      <ProfileAccounts /> {/**mise en page du profile account */}
    </main>
  );
}
export default Profile;
