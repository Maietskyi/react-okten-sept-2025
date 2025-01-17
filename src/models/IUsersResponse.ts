import {IUser} from "./IUser.ts";
import {IBaseResponseModel} from "./IBaseResponseModel.ts";

export interface IUsersResponse extends IBaseResponseModel {
    users: IUser[];
}
//