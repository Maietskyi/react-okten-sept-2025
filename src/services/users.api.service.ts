import {IUsersResponse} from "../models/IUsersResponse.ts";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const getUsers = async (page: string):Promise<IUsersResponse> => {
    const limit = 30;
    const skip = limit * (+page) - limit;
    const apiResponse = await fetch(baseUrl + '/users' + '?skip=' + skip)
        .then(value => value.json());
    console.log(apiResponse);
    return apiResponse;
}


// Можна так зробити

// export const getUsers = async (page: string) => {
//     let skip = 0;
//     const limit = 30;
//     if (+page > 0) {
//         skip = limit * (+page) - limit;
//     }
//     return await fetch(baseUrl + '/users' + '?skip=' + skip)