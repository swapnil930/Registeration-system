import axios from "axios";

export class UserServices {
    static serverURL = 'http://localhost:8080';

    static getAllUsers() {
        let dataURL = `${this.serverURL}/user`; 
        return axios.get(dataURL);
    }

    static userLogin(username, password) {
        let dataURL = `${this.serverURL}/user?username=${username}&password=${password}`;
        return axios.get(dataURL); // Removed additional params
    }

    static userRegistration(user) {
        let dataURL = `${this.serverURL}/user`;
        return axios.post(dataURL, user);
    }
}
