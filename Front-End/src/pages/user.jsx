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

const token = localStorage.getItem("token");
if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

function Profile() {
  const dispatch = useDispatch();
  const { isRemember } = useSelector((state) => state.login);

  userDatas()
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
      <UserHeader />
      <ProfileAccounts />
    </main>
  );
}
export default Profile;
