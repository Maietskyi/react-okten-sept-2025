import {IUser} from "../models/IUser.ts";
import {urls} from "../constants/url.ts";
import {IPost} from "../models/IPost.ts";


export const UserService = {
    getUsers: async (): Promise<IUser[]> => {
        return await fetch(urls.users.allUsers)
            .then(res => res.json())
    },
    getUser: async (id: number) => {
        return await fetch(urls.users.byId(id))
            .then(res => res.json())
    }
}

export const postService = {
    getAllPostsOfUsersById: async (id: number): Promise<IPost[]> => {
        return await fetch(urls.posts.userPostsById(id))
            .then(res => res.json())
    }
}