import axios from "axios";

/**
 * Function to get user datas profile
 * @returns {Promise<any>} Promise with user datas
 */

export async function userDatas() {  //récupération de donner vers API sur profil
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(process.env.REACT_APP_API_URL_PF);
      resolve(res.data);
    } catch (error) {
      reject(error);
    }
  });
}
