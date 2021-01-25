import axios from 'axios';

const API_URI = "http://localhost:8080/api/v1/user";

class AuthService {

  login(username, password) {

    axios.post(API_URI + "/authenticate", {
      username,
      password
    }).then((response) => {
      if (localStorage !== null || localStorage !== undefined) {
        localStorage.setItem("userToken", JSON.stringify(response.data));
      }
      console.log(response.data.jwtToken);
    }).catch((error) => {
      console.log(error);
    })
  }

  logout() {
    localStorage.removeItem("userToken");
  }

}
export default new AuthService();