import UserComponent from "./UserComponent.tsx";
import {useCallback, useMemo} from "react";
import {useFetch} from "../hooks/useFetch.tsx";

const UsersComponent = () => {
    console.log('users');
    const users = useFetch();
    const arr: number[] = useMemo(() => {
        return [11, 22, 33, 44]
    }, []);

    const foo = useCallback(() => {
        console.log(foo)
    }, [])

    return (
        <div>
            {users.map((user) => <UserComponent item={user} foo={foo} arr={arr}/>)}
        </div>
    );
};

export default UsersComponent;