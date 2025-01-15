import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAllUsers} from "../../services/api.service.ts";
import {IUser} from "../../models/IUser.ts";
import UserComponent from "../user/UserComponent.tsx";

export const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [query] = useSearchParams();
    useEffect(() => {
        getAllUsers(query.get('pg') || '1')
            .then(value => setUsers(value.data));
    }, [query]);

    return (
        <div>
            {
                users.map((value) => <UserComponent item={value} key={value.id} />)
            }
        </div>
    );
};
