import {useAppSelector, userSliceActoins} from "../main.tsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

export const UsersPage = () => {
    const {users} = useAppSelector(state => state.userSlice);
const dispatch = useDispatch();
useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(value => {
            dispatch(userSliceActoins.loadUsers(value));
        })
})

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

