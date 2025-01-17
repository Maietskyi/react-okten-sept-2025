import {IBaseResponseModel} from "./IBaseResponseModel.ts";
import {IPost} from "./IPost.ts";

export interface IPostsResponse extends IBaseResponseModel {
    posts: IPost[];
}
//