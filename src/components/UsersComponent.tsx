import UserComponent from "./UserComponent.tsx";
import {useEffect, useState} from "react";

const UsersComponent = () => {
    console.log('users')
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(values => {
                setUsers(values);
            });
        return () => {
            console.log('unsubscribe')
        }
    }, []);
    return (
        <div>Users Component
            <UserComponent/>
        </div>
    );
};

export default UsersComponent;