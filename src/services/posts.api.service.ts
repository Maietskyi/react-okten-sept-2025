import {baseUrl} from "./general.api.service.ts";

export const getPosts = async (page: string) => {
    const limit = 30;
    const skip = limit * (+page) - limit;
    return  await fetch(baseUrl + '/posts' + '?skip=' + skip)
        .then(res => res.json());
}
//