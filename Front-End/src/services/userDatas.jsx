import axios from "axios";

export async function userDatas() {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(process.env.REACT_APP_API_URL_PF);
      resolve(res.data);
    } catch (error) {
      reject(error);
    }
  });
}
