import UserComponent from "./UserComponent.tsx";
import {useCallback, useEffect, useState} from "react";

const UsersComponent = () => {
    console.log('users');
    const [users, setUsers] = useState([])

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
            <UserComponent foo={foo}/>
        </div>
    );
};

export default UsersComponent;