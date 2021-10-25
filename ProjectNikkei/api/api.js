// =======================================================
// [!] Method: postAuth
// [!] Params: email (type: string)
// [!] Description:
//      A POST method which requests 'auth' from the api;
//      api then inserts a new login auth and user to the
//      database with the given parameter, email
// =======================================================

exports.postAuth = async (email) => {
  try {
    await fetch("http://localhost:5000/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "true",
      },
      body: JSON.stringify({ email: email, pwd: randomPwd(), token: "oof" }),
    }).then((response) => {
      console.log(response);
    });
  } catch (error) {
    console.log("error");
    console.log(error);
  }
};

// [!] Helper method with no params which returns a random
//      12-char string

const randomPwd = () => {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let result = "";
  for (let i = 0; i < 12; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length)); // random alphanumeric char
  }
  return result;
};
