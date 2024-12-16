import axios from 'axios';
import Cookies from 'js-cookie';
import { API_URL } from '../../.env';


const Api = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
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