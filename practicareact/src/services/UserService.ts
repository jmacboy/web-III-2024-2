import axios from "axios";
import { TokenResponse } from "../models/TokenResponse";

export class UserService {
    login(email: string, password: string) {
        return new Promise<TokenResponse>((resolve, reject) => {
            axios.post('http://localhost:3000/auth/login/', {
                username: email,
                password: password
            }, {
                withCredentials: true
            }).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                console.log(error);
                reject(error);
            });
        });
    }
}