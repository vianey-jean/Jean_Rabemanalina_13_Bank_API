import axios from "axios";


export async function userLogin(credientials) {
  return new Promise(async (resolve, reject) => {
    try {
      //console.log(process.env.REACT_APP_API_URL_LOG)
      const res = await axios.post(process.env.REACT_APP_API_URL_LOG, credientials);
      const token = res.data.body.token;
      if (token)
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      else delete axios.defaults.headers.common["Authorization"];
      resolve(res.data);
    } catch (error) {
      reject(error);
    }
  });
}
