import axios from "axios";


export async function userUpDate(userFirstLastName) {
  console.log(userFirstLastName);
  return new Promise(async (resolve, reject) => {
    try {
      //console.log(process.env.REACT_APP_API_URL_PF)
      const res = await axios.put(process.env.REACT_APP_API_URL_PF, userFirstLastName);

      console.log(res);

      resolve(res.data);
    } catch (error) {
      console.log("error userUpDate");
      console.log(error);
      reject(error);
    }
  });
}
