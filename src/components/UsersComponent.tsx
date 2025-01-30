import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {userActions} from "../redux/slices/UserSlice.ts";
import {IUser} from "../models/IUser.ts";

export const UsersComponent = () => {

    const dispatch = useAppDispatch();
    const users = useAppSelector((state) => state.userStoreSlice.users);
    useEffect(() => {
        dispatch(userActions.loadUsers())
    }, [])

    return (
        <>
            {users.map((user:IUser) => (<div key={user.id}>{user.id}--{user.name}</div>))}
        </>
    );
};

