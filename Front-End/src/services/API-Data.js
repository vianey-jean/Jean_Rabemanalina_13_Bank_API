/* Get Login Data */
export function getLoginData(data) {
  if (data.status !== 400) {
    const obj = {
      status: data.status,
      message: data.message,
      token: data.body.token,
    };

    return obj;
  } else {
    const obj = {
      status: data.status,
      message: data.message,
    };

    return obj;
  }
}
