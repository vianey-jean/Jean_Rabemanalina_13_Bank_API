import axios from "axios";

/**
 * Function to get user datas first ant last name
 * @param {Object} userFirstLastName
 * @param {String} userFirstLastName.firstName user's first name
 * @param {String} userFirstLastName.lastName user's last name
 * @returns {Promise<any>} Promise with user datas
 */


export async function userUpDate(userFirstLastName) { //mise a jour des donner via API sur profil
  console.log(userFirstLastName);
  return new Promise(async (resolve, reject) => {
    try {
      //console.log(process.env.REACT_APP_API_URL_PF)
      const res = await axios.put(process.env.REACT_APP_API_URL_PF, userFirstLastName);
      resolve(res.data);
      console.log(res.data);
    } catch (error) {
      console.log("error userUpDate");
      console.log(error);
      reject(error);
    }
  });
}
