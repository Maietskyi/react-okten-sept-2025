import {IReqResInResponse} from "../models/IReqResInResponse.ts";

export const getAllUsers = async (pg: string):Promise<IReqResInResponse> => {
    return await fetch('https://reqres.in/api/users?page=' + pg)
        .then(value => value.json())
}