import Axios from "axios";
class RegistrationService {
  register(email, username, password, dob) {
    return Axios.post("http://localhost:5050/auth/signup", {
      email,
      dob,
      username,
      password,
    });
  }
}
export default new RegistrationService();
