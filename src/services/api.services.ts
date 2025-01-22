import axios from "axios";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";

export const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com/auth",
    headers: {}
})

type loginData = {
    username: string,
    password: string,
    expiresInMain: number
}

export const login = async ({username, password, expiresInMain}: loginData) => {
   const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMain})
    console.log(userWithTokens)
}