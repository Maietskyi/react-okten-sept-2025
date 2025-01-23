import axios from "axios";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {IProduct} from "../models/IProduct.ts";
import {IProductsResponseType} from "../models/IProductsResponseType.ts";

const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com/auth",
    headers: {}
})

type loginData = {
    username: string,
    password: string,
    expiresInMins: number
}

export const login = async ({username, password, expiresInMins}: loginData): Promise<IUserWithTokens> => {
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {
        username, password, expiresInMins})
    console.log(userWithTokens);
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens;
}

export const loadAuthProducts = async ():Promise<IProduct[]> => {
 const {data} = await axiosInstance.get<IProductsResponseType>('/products');
 return data.products
}