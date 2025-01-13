import {IBaseResponseModel} from "../models/IBaseResponseModel.ts";
import {IPost} from "../models/IPost.ts";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const getAll = async <T, >(endpoint: string):Promise<T> => {
    return await fetch(`${baseUrl}${endpoint}`).then(res => res.json());
}

getAll<IBaseResponseModel & {posts:IPost[]}>('/posts')