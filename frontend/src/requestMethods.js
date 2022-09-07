import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
//const TOKEN = currentUser?.accessToken;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTFlOGQ1ODk3Y2U2ZGQxYWJhZTdhMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MjQ1MzI2OCwiZXhwIjoxNjYyNzEyNDY4fQ.Rm4Btaep9IKTXOLho1YymIHQAqj1f_G0WUXM_c5oEbw";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});