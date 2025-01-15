import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import UserComponent from "../user/UserComponent.tsx";
import {UserService} from "../../services/api.service.ts";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        UserService.getUsers()
            .then(allUsers => {
                setUsers(allUsers)
            });
    },[])
    return (
        <div>
            {
                users.map((user: IUser) => <UserComponent key={user.id} item={user}/>)
            }
        </div>
    );
};

export default UsersComponent;