import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = import.meta.env.VITE_API_URL;


const Api = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const SetAuthToken = (token) => {
  if (token) {
    Api.defaults.headers.common["Authorization"] = `${token}`;
    Cookies.setItem("token", token);
  } else {
    delete Api.defaults.headers.common["Authorization"];
    Cookies.removeItem("token");
  }
}

const Login = async (email, password) => {
  const response = await Api.post("api/token", { email, password }).catch(
    (error) => {
      throw error;
    }
  );
  const { token } = response.data;

  SetAuthToken(token);
  Cookies.set("token", token);
  Cookies.set("username", JSON.stringify(response.data.username));
}



export { SetAuthToken, Login}
export default Api