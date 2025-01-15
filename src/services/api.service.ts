import {IUser} from "../models/IUser.ts";
import {urls} from "../constants/url.ts";



export const UserService = {
    getUsers: async (): Promise<IUser[]> => {
        return await fetch(urls.users.allUsers)
            .then(res => res.json())
    },
    getUser: async (id:number)=> {
        return await fetch(urls.users.byId(id))
            .then(res => res.json())
    }
}
