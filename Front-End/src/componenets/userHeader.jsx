import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  profilePending,
  profileFirstName,
  profileLastName,
  profileError,
} from "../features/token/profileSlice";
import { userUpDate } from "../services/userUpDate";

/**
 * Component user header
 * @returns {React.ReactElement} JSX.Element - userHeader component
 */

function UserHeader() {
  const dispatch = useDispatch();
  const localStorageFirstName = localStorage.getItem("firstName");
  const localStorageLastName = localStorage.getItem("lastName");
  const { firstName, lastName } = useSelector((state) => state.profile); //je selectionne le state profile

  useEffect(() => { //création du hook pour localstorage du nom et prénom
    if (localStorageFirstName && localStorageLastName) {
      dispatch(profileFirstName(localStorageFirstName));
      dispatch(profileLastName(localStorageLastName));
    }
  }, [dispatch, localStorageFirstName, localStorageLastName]);

  const [editButton, setEditButton] = useState(""); 
  const [userFirstLastName, setUserFirstLastName] = useState({ //mettre le nom et prénom a vide
    firstName: "",
    lastName: "",
  });

  function handelChange({ currentTarget }) {// récupère la valeur du nom et prénom saisie
    const { value, name } = currentTarget;
    setUserFirstLastName({
      ...userFirstLastName,
      [name]: value,
    });
  }

  function editNameButton(e) {// création du boutton edit
    e.preventDefault();
    setEditButton((current) => !current);
  }

  async function submitHandler(e) {
    e.preventDefault();
    dispatch(profilePending());
    try { //changement et mise a jour du profil (nom et prénom)
      const newUser = await userUpDate(userFirstLastName);
      dispatch(profileFirstName(newUser.body.firstName));
      dispatch(profileLastName(newUser.body.lastName));
      setEditButton((current) => !current);
      alert('Update user is successfuly')
    } catch (error) { // si non message erreur
      dispatch(profileError(error.response.data.message));
    }
  }

  return (
    <>
      {!editButton ? (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstName + " " + lastName} !
          </h1>
          <button onClick={editNameButton} className="edit-button">
            Edit Name
          </button>
        </div>
      ) : (
        <div className="header">
          <h1>Welcome back</h1>
          <form className="editNameContent" onSubmit={submitHandler}>
            <div className="headerUserContentSave">
              <input
                className="InputfirstName"
                type="text"
                placeholder={firstName}
                name="firstName"
                onChange={handelChange}
                required
              />
              <button className="edit-button" type="submit">
                Save
              </button>
            </div>
            <div className="headerUserContentCancel">
              <input
                className="inputLastName"
                type="text"
                placeholder={lastName}
                name="lastName"
                onChange={handelChange}
                required
              />
              <button className="edit-button" onClick={editNameButton}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
export default UserHeader;
