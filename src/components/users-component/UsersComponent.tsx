import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {UserComponent} from "./UserComponent.tsx";
import {getUsers} from "../../services/users.api.service.ts";
import {IUsersResponse} from "../../models/IUsersResponse.ts";
import {Outlet, useSearchParams} from "react-router-dom";
import {PaginationComponent} from "../pagination-component/PaginationComponent.tsx";

export const UsersComponent = () => {
    const [searchParams] = useSearchParams({page:'1'});

    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';
        getUsers(currentPage)
            .then(({users}:IUsersResponse) => {
                setUsers(users);
            });
    }, [searchParams]);
    return (
        <>
            <div>
                {
                    users.map((user: IUser) =>
                        <UserComponent key={user.id} user={user}/>)
                }
            </div>
            <div>
                <Outlet/>
                <PaginationComponent/>
            </div>
        </>
    );
};
