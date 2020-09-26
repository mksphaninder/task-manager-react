import Axios from "axios";

class LoginService {
  auth(username, password) {
    return Axios.post("http://localhost:5050/auth/login", {
      username: username,
      password: password,
    });
  }
  isAuthenticated(token) {
    return Axios.get("http://localhost:5050/auth/is-authorized", {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
  }
}

export default new LoginService();
