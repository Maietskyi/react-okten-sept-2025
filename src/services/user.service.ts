import axios from "axios";
import {IUser} from "../models/IUser.ts";

export const axiosInterfence = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {'Content-Type': 'application/json'},
});

export const getAllUsers = async (): Promise<IUser[]> => {
    const {data} = await axiosInterfence.get<IUser[]>("/users");
    return data;
};

axiosInterfence.interceptors.request.use((request) => {
    console.log(request);
    request.headers.set("xxx", "xxxx");
    console.log(request.method);
    return request;
});
axiosInterfence.interceptors.response.use((response) => {
    console.log(response);
    return response;
});

export const saveUser = async (user: IUser): Promise<IUser> => {
    const {data} = await axiosInterfence.post<IUser>('/users', user);
    return data;
}