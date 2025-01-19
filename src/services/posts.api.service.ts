import {baseUrl} from "./general.api.service.ts";
import {IPostsResponse} from "../models/IPostsResponse.ts";

export const getPosts = async (page: string):Promise<IPostsResponse> => {
    const limit = 30;
    const skip = limit * (+page) - limit;
    return  await fetch(baseUrl + '/posts' + '?skip=' + skip)
        .then(res => res.json());
}