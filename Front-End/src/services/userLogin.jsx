import axios from "axios";

/**
 * Function to get user datas login
 * @param {Objet} credientials user's credentials
 * @param {String} credientials.email user's email
 * @param {String} credientials.password user's password
 * @returns {Promise<any>} Promise with user datas
 */

export async function userLogin(credientials) { //récupèration API sur login
  return new Promise(async (resolve, reject) => {
    try {
      //console.log(process.env.REACT_APP_API_URL_LOG)
      const res = await axios.post(process.env.REACT_APP_API_URL_LOG, credientials);
      const token = res.data.body.token;
      if (token)
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      else delete axios.defaults.headers.common["Authorization"];
      resolve(res.data);
      console.log(res.data)
    } catch (error) {
      reject(error);
    }
  });
}
