import UserComponent from "./UserComponent.tsx";
import {useCallback, useEffect, useMemo, useState} from "react";

const UsersComponent = () => {
    console.log('users');
    const [users, setUsers] = useState([])

    const arr: number[] = useMemo(() => {
        return [11, 22, 33, 44]
    }, []);

    const foo = useCallback(() => {
        console.log(foo)
    }, [])

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(values => {
                setUsers(values);
                console.log(users)
            });
        return () => {
            console.log('unsubscribe')
        }
    }, []);
    return (
        <div>Users Component
            <UserComponent foo={foo} arr={arr}/>
        </div>
    );
};

export default UsersComponent;