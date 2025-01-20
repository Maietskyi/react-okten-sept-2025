import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {UserComponent} from "./UserComponent.tsx";
import {getUsers} from "../../services/users.api.service.ts";
import {IUsersResponse} from "../../models/IUsersResponse.ts";
import {Outlet, useSearchParams} from "react-router-dom";
import {PaginationComponent} from "../pagination-component/PaginationComponent.tsx";

export const UsersComponent = () => {

    const [searchParams] = useSearchParams({page: '1'});
    const [disabledStatus, setDisabledStatus] = useState<boolean>(false);
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';
        getUsers(currentPage)
            .then(({users, total}: IUsersResponse) => {
                setUsers(users);
                const lastUserIdOfCurrentBatch = users[users.length - 1]['id'];
                if (lastUserIdOfCurrentBatch === total) {
                    setDisabledStatus(true);
                }
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
                <PaginationComponent disabledStatus={disabledStatus}/>
            </div>
        </>
    );
};
