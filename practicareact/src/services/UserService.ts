import axios from "axios";
import { TokenResponse } from "../models/TokenResponse";
import { User } from "../models/User";
import apiClient from "./interceptor";

export class UserService {
    login(email: string, password: string) {
        return new Promise<TokenResponse>((resolve, reject) => {
            axios.post('http://localhost:8000/api/token/', {
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
    me() {
        return new Promise<User>((resolve, reject) => {
            apiClient.get('http://localhost:8000/api/auth/me/', {
                withCredentials: true
            }).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                console.log(error);
                reject(error);
            });
        });
    }
    logout() {
        return new Promise<TokenResponse>((resolve, reject) => {
            apiClient.post('http://localhost:8000/api/logout/', {
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