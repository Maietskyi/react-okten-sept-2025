import {useEffect} from "react";
import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.ts";
import {userSliceActions} from "../redux/slices/userSlice/userSlice.ts";

export const UsersPage = () => {
    const {users} = useAppSelector(state => state.userSlice);
const dispatch = useAppDispatch();
useEffect(() => {
    dispatch(userSliceActions.loadUsers())
},[])

return (
        <div>
            {
                users.map((user) => {
                    return <div key={user.id}>{user.name}</div>
                })
            }
        </div>
    );
};

