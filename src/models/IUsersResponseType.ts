import {IUser} from "./IUser.ts";

export interface IUsersResponseType {
	total: number;
	skip: number;
	limit: number;
	users: IUser[];
}