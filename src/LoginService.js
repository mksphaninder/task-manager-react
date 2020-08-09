import axios from "axios";

class LoginService {
  auth(username, password) {
    return axios.post("http://localhost:5050/auth/login", {
      username: username,
      password: password,
    });
  }
}

export default new LoginService();
